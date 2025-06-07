import { useCallback, useState } from 'react';
import { useDropzone, type FileRejection } from 'react-dropzone';
import { Upload } from 'lucide-react';
import { compressImage, sanitizeFileName } from '../../lib/utils/imageUtils';
import '../../styles/ImageUpload.css';
import { MAX_IMAGE_FILE_SIZE, ALLOWED_IMAGE_TYPES } from '../../lib/consts/image';

interface ImageUploadProps {
  onImageChange: (image: string | null) => void;
  currentImage?: string | null;
  error?: string;
}

const ImageUpload = ({ onImageChange, currentImage, error }: ImageUploadProps) => {
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];
      if (!file) {
        return;
      }

      setUploadError(null);
      setUploading(true);

      try {
        const cleanName = sanitizeFileName(file.name);
        const safeFile = new File([file], cleanName, { type: file.type });
        const compressedImage = await compressImage(safeFile);
        onImageChange(compressedImage);
      } catch (error) {
        console.error('Error processing image:', error);
        setUploadError('Failed to process image. Please try again.');
      } finally {
        setUploading(false);
      }
    },
    [onImageChange]
  );

  const onDropRejected = useCallback(
    (fileRejections: FileRejection[]) => {
      if (fileRejections && fileRejections.length > 0) {
        const rejection = fileRejections[0];
        if (rejection.errors && rejection.errors.length > 0) {
          setUploadError(rejection.errors[0].message);
        } else {
          setUploadError('File not accepted. Please upload a valid image.');
        }
      }
    },
    []
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    accept: ALLOWED_IMAGE_TYPES,
    maxSize: MAX_IMAGE_FILE_SIZE, // 5MB
    multiple: false,
    disabled: uploading,
  });

  const removeImage = () => {
    onImageChange(null);
    setUploadError(null);
  };

  if (currentImage) {
    return (
      <div className="image-upload-container">
        <div className="image-preview">
          <img src={currentImage} alt="Profile preview" />
          <button
            type="button"
            onClick={removeImage}
            className="image-remove-button"
            title="Remove image"
          >
            ×
          </button>
        </div>
        {(error || uploadError) && (
          <p className="upload-error">{error || uploadError}</p>
        )}
      </div>
    );
  }

  return (
    <div className="image-upload-container">
      <div
        {...getRootProps()}
        className={`image-upload-dropzone ${isDragActive ? 'drag-active' : ''}`}
      >
        <input {...getInputProps()} />
        <Upload className="image-upload-icon" />
        <p className="image-upload-text">
          {uploading
            ? 'Processing...'
            : isDragActive
            ? 'Drop the image here'
            : 'Click or drag to upload'}
        </p>
        <p className="image-upload-subtext">
          PNG, JPG, WebP up to 5MB
        </p>
      </div>
      {(error || uploadError) && (
        <p className="upload-error">{error || uploadError}</p>
      )}
    </div>
  );
};

export default ImageUpload;
