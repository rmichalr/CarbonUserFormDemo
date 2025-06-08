import { CardContent } from "../../components/carbon-ui";
import AvatarUploadSection from "./components/AvatarUploadSection";
import NameFieldsSection from "./components/NameFieldsSection";
import ContactInfoSection from "./components/ContactInfoSection";
import AboutSection from "./components/AboutSection";
import { Button } from "../../components/carbon-ui";
import { useProfileFormLogic } from "../../hooks/useProfileFormLogic";

const ProfileFormContent = () => {
  const {
    avatarPreview,
    handleAvatarChange,
    isSubmitting,
    submitError,
    submitForm,
    handleSubmit,
    errors,
    isValid,
    handleResetForm,
    submitLabel,
  } = useProfileFormLogic();

  return (
    <CardContent>
      <form onSubmit={handleSubmit(submitForm)} className="profile-form__form">
        {submitError && (
          <div className="profile-form__submit-error">
            {submitError}
          </div>
        )}

        <AvatarUploadSection
          avatarPreview={avatarPreview}
          onAvatarChange={handleAvatarChange}
          error={
            typeof errors.avatar?.message === "string"
              ? errors.avatar.message
              : undefined
          }
        />

        <NameFieldsSection />
        <ContactInfoSection />
        <AboutSection />

        <div className="profile-form__actions">
          <Button
            type="submit"
            disabled={isSubmitting}
            variant="primary"
            className="btn btn--primary"
          >
            {submitLabel}
          </Button>
          <Button
            type="button"
            onClick={handleResetForm}
            disabled={isSubmitting}
            variant="danger"
            className="btn btn--danger"
          >
            Reset form
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="profile-form__debug-info">
            Form valid: {isValid ? "Yes" : "No"} | Has errors:{" "}
            {Object.keys(errors).length > 0 ? "Yes" : "No"}
            {Object.keys(errors).length > 0 && (
              <div>Errors: {Object.keys(errors).join(", ")}</div>
            )}
          </div>
        )}
      </form>
    </CardContent>
  );
};

export default ProfileFormContent;
