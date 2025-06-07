import { Label } from "../../../components/ui/label";
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
  <div className="space-y-2">
    <Label>Profile Photo (Optional)</Label>
    <ImageUpload
      onImageChange={onAvatarChange}
      currentImage={avatarPreview}
      error={error}
    />
  </div>
);

export default AvatarUploadSection;
