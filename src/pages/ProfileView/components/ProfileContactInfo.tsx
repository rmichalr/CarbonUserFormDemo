type ProfileContactInfoProps = {
  profileData: {
    email: string;
    phone: string;
    birthday: string;
  };
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ProfileContactInfo({ profileData }: ProfileContactInfoProps) {
  return (
    <div className="profile-view__contact-info">
      <div className="profile-view__field">
        <span className="profile-view__field-label">Email</span>
        <span className="profile-view__field-value">
          <a
            href={`mailto:${profileData.email}`}
            className="u-text-color--blue-700 u-no-underline hover-underline"
          >
            {profileData.email}
          </a>
        </span>
      </div>
      <div className="profile-view__field">
        <span className="profile-view__field-label">Phone</span>
        <span className="profile-view__field-value">
          <a
            href={`tel:${profileData.phone}`}
            className="u-text-color--green-700 u-no-underline hover-underline"
          >
            {profileData.phone}
          </a>
        </span>
      </div>
      <div className="profile-view__field">
        <span className="profile-view__field-label">Birthday</span>
        <span className="profile-view__field-value">{formatDate(profileData.birthday)}</span>
      </div>
    </div>
  );
}
