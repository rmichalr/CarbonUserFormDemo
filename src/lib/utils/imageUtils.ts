import imageCompression from "browser-image-compression";
import { IMAGE_COMPRESSION } from "../consts/image";

export const compressImage = async (file: File): Promise<string> => {
  try {
    const options = {
      maxSizeMB: IMAGE_COMPRESSION.MAX_SIZE_MB,
      maxWidthOrHeight: IMAGE_COMPRESSION.MAX_DIMENSION,
      useWebWorker: true,
      fileType: IMAGE_COMPRESSION.FILE_TYPE,
    };

    const compressedFile = await imageCompression(file, options);

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(compressedFile);
    });
  } catch (error) {
    console.error("Error compressing image:", error);
    throw new Error("Failed to process image");
  }
};

export const sanitizeFileName = (fileName: string): string => {
  return fileName
    .replace(/[^a-zA-Z0-9.-]/g, "_")
    .replace(/_{2,}/g, "_")
    .slice(0, 255);
};
