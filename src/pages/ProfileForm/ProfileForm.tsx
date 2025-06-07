import { Card, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import ProfileFormContent from "./ProfileFormContent";

const ProfileForm = () => (
  <Card className="max-w-2xl mx-auto shadow-2xl border-none">
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
