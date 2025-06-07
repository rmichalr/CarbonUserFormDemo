import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userProfileSchema } from "../lib/validations/userProfile";
import type { UserProfile, UserProfileWithAvatar } from "../types/user";
import { useDebounce } from "../hooks/useDebounce";
import { useSessionContext } from "./SessionContext";

interface UserDataContextType {
  form: UseFormReturn<UserProfile>;
  avatarPreview: string | null;
  handleAvatarChange: (image: string | null) => void;
  profileData: UserProfileWithAvatar | null;
  setProfileData: (data: UserProfileWithAvatar | null) => void;
  clearProfile: () => void;
}

const UserDataContext = createContext<UserDataContextType | undefined>(
  undefined
);

export const UserDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<UserProfileWithAvatar | null>(
    null
  );

  const { saveFormDraft, loadFormDraft } = useSessionContext();

  const form = useForm<UserProfile>({
    resolver: zodResolver(userProfileSchema),
    mode: "onTouched",
    reValidateMode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      birthday: "",
      about: "",
      avatar: undefined,
    },
  });

  const debouncedSaveFormDraft = useDebounce<UserProfile>((formData) => {
    const hasData = Object.values(formData).some(
      (value) => value !== "" && value != null
    );
    if (hasData) {
      saveFormDraft({ ...formData, avatar: avatarPreview });
    }
  }, 1000);

  useEffect(() => {
    const subscription = form.watch((formData) => {
      const { firstName, lastName, email, phone, birthday, about, avatar } =
        formData;
      debouncedSaveFormDraft({
        firstName: firstName ?? "",
        lastName: lastName ?? "",
        email: email ?? "",
        phone: phone ?? "",
        birthday: birthday ?? "",
        about: about ?? "",
        avatar: avatar,
      });
    });
    return () => subscription.unsubscribe();
  }, [form, debouncedSaveFormDraft]);

  const handleAvatarChange = useCallback(
    (image: string | null) => {
      setAvatarPreview(image);
      form.setValue("avatar", image, {
        shouldValidate: true,
        shouldDirty: true,
      });
      form.clearErrors("avatar");
    },
    [form]
  );

  useEffect(() => {
    const draft = loadFormDraft();
    if (draft) {
      const { avatar, firstName, lastName, email, phone, birthday, about } = draft;
      Object.entries(draft).forEach(([key, value]) => {
        if (key !== "avatar" && value !== undefined) {
          form.setValue(key as keyof UserProfile, value);
        }
      });

      if (avatar) {
        setAvatarPreview(avatar);
        form.setValue("avatar", undefined);
      }

      setProfileData({
        firstName: firstName ?? "",
        lastName: lastName ?? "",
        email: email ?? "",
        phone: phone ?? "",
        birthday: birthday ?? "",
        about: about ?? "",
        avatar: avatar ?? null,
      });
    }
  }, []);

  const clearProfile = useCallback(() => setProfileData(null), []);

  const contextValue = useMemo(
    () => ({
      form,
      avatarPreview,
      handleAvatarChange,
      profileData,
      setProfileData,
      clearProfile,
    }),
    [form, avatarPreview, handleAvatarChange, profileData]
  );

  return (
    <UserDataContext.Provider value={contextValue}>
      {children}
    </UserDataContext.Provider>
  );
};

export const useUserDataContext = () => {
  const context = useContext(UserDataContext);
  if (!context)
    throw new Error("useUserDataContext must be used within UserDataProvider");
  return context;
};
