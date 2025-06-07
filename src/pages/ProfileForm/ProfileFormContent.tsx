import { CardContent } from "../../components/ui/card";
import AvatarUploadSection from "./components/AvatarUploadSection";
import NameFieldsSection from "./components/NameFieldsSection";
import ContactInfoSection from "./components/ContactInfoSection";
import AboutSection from "./components/AboutSection";
import { Button } from "../../components/ui/button";
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
      <form onSubmit={handleSubmit(submitForm)} className="space-y-6">
        {submitError && (
          <div className="p-4 text-sm text-red-800 bg-red-100 border border-red-200 rounded-md">
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

        <div className="flex gap-4">
          <Button
            type="submit"
            className="flex-1 rounded-lg shadow-lg cursor-pointer"
            disabled={isSubmitting}
            variant="primary"
          >
            {submitLabel}
          </Button>
          <Button
            type="button"
            className="flex-1 cursor-pointer"
            onClick={handleResetForm}
            disabled={isSubmitting}
            variant="danger"
          >
            Reset form
          </Button>
        </div>

        {process.env.NODE_ENV === "development" && (
          <div className="text-xs text-gray-500 p-2 bg-gray-50 rounded">
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
