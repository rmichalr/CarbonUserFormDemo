import { useUserDataContext } from "../../contexts/UserDataContext";
import {
  Card,
  CardHeader,
  CardTitle,
} from "../../components/carbon-ui";
import { NoProfileData } from "./components/NoProfileData";
import { ProfileViewContent } from "./ProfileViewContent";

const ProfileView = () => {
  const { profileData } = useUserDataContext();

  if (!profileData) {
    return <NoProfileData />;
  }

  return (
    <Card className="card--max-width-2xl card--borderless">
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <ProfileViewContent />
    </Card>
  );
};

export default ProfileView;
