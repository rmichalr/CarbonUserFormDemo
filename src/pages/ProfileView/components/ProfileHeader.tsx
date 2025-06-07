import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";

type ProfileHeaderProps = {
  profileData: {
    firstName: string;
    lastName: string;
    avatar?: string | null;
  };
};

function getInitials(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
}

export function ProfileHeader({ profileData }: ProfileHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
      <Avatar className="w-24 h-24">
        <AvatarImage
          src={profileData.avatar || undefined}
          alt="Profile"
        />
        <AvatarFallback className="text-lg border shadow-sm font-bold">
          {getInitials(profileData.firstName, profileData.lastName)}
        </AvatarFallback>
      </Avatar>
      <div className="text-center sm:text-left">
        <h2 className="text-2xl font-bold text-gray-900">
          {profileData.firstName} {profileData.lastName}
        </h2>
      </div>
    </div>
  );
}
