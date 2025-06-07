import { useState } from "react";
import { compressImage } from "../lib/utils/imageUtils";
import type { UserProfile, UserProfileWithAvatar } from "../types/user";
import type { UseFormReturn } from "react-hook-form";

interface SubmissionDependencies {
  saveProfileData: (data: UserProfileWithAvatar) => void;
  setProfileData: (data: UserProfileWithAvatar) => void;
  clearFormData: () => void;
  onSuccess: () => void;
  onError?: (error: string) => void;
}

export function useProfileSubmission(
  form: UseFormReturn<UserProfile>,
  avatarPreview: string | null,
  dependencies: SubmissionDependencies
) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const { saveProfileData, setProfileData, clearFormData, onSuccess, onError } =
    dependencies;

  const submitForm = async () => {
    const isValid = await form.trigger();
    if (!isValid) {
      const errorMsg = "Please fix the errors before submitting.";
      setSubmitError(errorMsg);
      onError?.(errorMsg);
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const { firstName, lastName, email, phone, birthday, about, avatar } =
        form.getValues();
      let processedAvatar: string | null = null;

      if (Array.isArray(avatar) && avatar[0] && avatar[0] instanceof File) {
        processedAvatar = await compressImage(avatar[0]);
      } else if (avatarPreview) {
        processedAvatar = avatarPreview;
      }

      const profileData: UserProfileWithAvatar = {
        firstName,
        lastName,
        email,
        phone,
        birthday,
        about,
        avatar: processedAvatar,
      };

      saveProfileData(profileData);
      setProfileData(profileData);
      clearFormData();
      onSuccess();
    } catch (error) {
      console.error(error);
      const errorMsg =
        "An error occurred while saving your profile. Please try again.";
      setSubmitError(errorMsg);
      onError?.(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, submitError, submitForm };
}
