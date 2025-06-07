import { useCallback, useEffect, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUserDataContext } from "../contexts/UserDataContext";
import { useProfileSubmission } from "./useProfileSubmission";
import { useFormState } from "react-hook-form";
import type { UserProfile } from "../types/user";
import { useSessionContext } from "../contexts/SessionContext";

export const useProfileFormLogic = () => {
  const { form, avatarPreview, handleAvatarChange } = useUserDataContext();
  const navigate = useNavigate();
  const { saveProfileData, clearFormData } = useSessionContext();
  const { setProfileData } = useUserDataContext();

  const submissionDependencies = useMemo(
    () => ({
      saveProfileData,
      setProfileData,
      clearFormData,
      onSuccess: () => navigate("/profile"),
      onError: (error: string) => {
        console.error("Submission failed:", error);
      },
    }),
    [saveProfileData, setProfileData, clearFormData, navigate]
  );

  const { isSubmitting, submitError, submitForm } = useProfileSubmission(
    form,
    avatarPreview,
    submissionDependencies
  );

  const { errors, isValid } = useFormState({ control: form.control });
  const { handleSubmit, reset } = form;
  const location = useLocation();
  const isEditMode = location.state?.isEditMode === true;

  const emptyValues = useMemo<UserProfile>(() => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    birthday: "",
    about: "",
    avatar: undefined,
  }), []);

  const handleResetForm = useCallback(() => {
    reset(emptyValues);
    handleAvatarChange(null);
  }, [reset, handleAvatarChange, emptyValues]);

  useEffect(() => {
    if (location.state?.resetForm) {
      handleResetForm();
      navigate(location.pathname, { replace: true, state: {} });
    }
  }, [location.state?.resetForm, handleResetForm, navigate, location.pathname]);

  const submitLabel = isSubmitting
    ? isEditMode
      ? "Updating Profile..."
      : "Creating Profile..."
    : isEditMode
    ? "Update Profile"
    : "Create Profile";

  return {
    form,
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
  };
};
