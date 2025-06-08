import { Label } from "../../../components/carbon-ui";
import ImageUpload from "../../../components/common/ImageUpload";

interface AvatarUploadSectionProps {
  avatarPreview: string | null;
  onAvatarChange: (image: string | null) => void;
  error?: string;
}

const AvatarUploadSection = ({
  avatarPreview,
  onAvatarChange,
  error,
}: AvatarUploadSectionProps) => (
  <div className="avatar-upload-section">
    <Label className="avatar-upload-section__label">Profile Photo (Optional)</Label>
    <ImageUpload
      onImageChange={onAvatarChange}
      currentImage={avatarPreview}
      error={error}
    />
  </div>
);

export default AvatarUploadSection;
