import { useNavigate } from "react-router-dom";
import { CardContent } from "../../components/carbon-ui";
import { Edit } from "lucide-react";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileContactInfo } from "./components/ProfileContactInfo";
import { ProfileAbout } from "./components/ProfileAbout";
import { useUserDataContext } from "../../contexts/UserDataContext";
import { Button } from "../../components/carbon-ui";

export const ProfileViewContent = () => {
  const navigate = useNavigate();
  const { profileData } = useUserDataContext();

  if (!profileData) return null;

  const handleEditProfile = () => {
    navigate("/", { state: { isEditMode: true } });
  };

  return (
    <CardContent className="profile-view__content">
      <ProfileHeader profileData={profileData} />
      <ProfileContactInfo profileData={profileData} />
      <ProfileAbout profileData={profileData} />
      <div className="profile-view__actions">
        <Button
          onClick={handleEditProfile}
          className="profile-view__edit-button btn btn--primary"
          variant="primary"
        >
          <Edit className="btn__icon btn__icon--left" />
          Edit Profile
        </Button>
      </div>
    </CardContent>
  );
};
