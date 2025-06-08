import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/carbon-ui";

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
    <div className="profile-view__header">
      <div className="profile-view__avatar-section">
        <Avatar className="avatar avatar--2xl">
          <AvatarImage src={profileData.avatar || undefined} alt="Profile" />
          {!profileData.avatar && (
            <AvatarFallback className="avatar__fallback">
              {getInitials(profileData.firstName, profileData.lastName)}
            </AvatarFallback>
          )}
        </Avatar>
      </div>
      <div className="profile-view__info-section">
        <h2 className="profile-view__name">
          {profileData.firstName} {profileData.lastName}
        </h2>
      </div>
    </div>
  );
}
