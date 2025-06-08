type ProfileAboutProps = {
  profileData: {
    about: string;
  };
};

export function ProfileAbout({ profileData }: ProfileAboutProps) {
  return (
    <div className="profile-view__about-section">
      <h3 className="profile-view__about-label">About</h3>
      <div className="profile-view__about-content">
        {profileData.about}
      </div>
    </div>
  );
}
