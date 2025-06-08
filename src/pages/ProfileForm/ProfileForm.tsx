import { Card, CardDescription, CardHeader, CardTitle } from "../../components/carbon-ui";
import ProfileFormContent from "./ProfileFormContent";

const ProfileForm = () => (
  <Card className="card--max-width-2xl card--borderless">
    <CardHeader>
      <CardTitle>Create Your Profile</CardTitle>
      <CardDescription>
        Fill out the form below to create your user profile.
      </CardDescription>
    </CardHeader>
    <ProfileFormContent />
  </Card>
);

export default ProfileForm;
