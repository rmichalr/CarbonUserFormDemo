import { useUserDataContext } from "../../contexts/UserDataContext";
import {
  Card,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { NoProfileData } from "./components/NoProfileData";
import { ProfileViewContent } from "./ProfileViewContent";

const ProfileView = () => {
  const { profileData } = useUserDataContext();

  if (!profileData) {
    return <NoProfileData />;
  }

  return (
    <Card className="max-w-2xl mx-auto shadow-2xl border-none">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <ProfileViewContent />
    </Card>
  );
};

export default ProfileView;
