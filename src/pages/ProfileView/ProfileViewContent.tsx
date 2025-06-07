import { useNavigate } from "react-router-dom";
import { CardContent } from "../../components/ui/card";
import { Edit } from "lucide-react";
import { ProfileHeader } from "./components/ProfileHeader";
import { ProfileContactInfo } from "./components/ProfileContactInfo";
import { ProfileAbout } from "./components/ProfileAbout";
import { useUserDataContext } from "../../contexts/UserDataContext";
import { Button } from "../../components/ui/button";

export const ProfileViewContent = () => {
  const navigate = useNavigate();
  const { profileData } = useUserDataContext();

  if (!profileData) return null;

  const handleEditProfile = () => {
    navigate("/", { state: { isEditMode: true } });
  };

  return (
    <CardContent className="space-y-6">
      <ProfileHeader profileData={profileData} />
      <ProfileContactInfo profileData={profileData} />
      <ProfileAbout profileData={profileData} />
      <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
        <Button
          onClick={handleEditProfile}
          className="flex-1 shadow-md cursor-pointer"
          variant="primary"
        >
          <Edit className="w-4 h-4 mr-2" />
          Edit Profile
        </Button>
      </div>
    </CardContent>
  );
};
