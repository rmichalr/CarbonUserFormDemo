import React, { createContext, useCallback, useContext } from "react";
import type { UserProfileWithAvatar } from "../types/user";
import { STORAGE_KEYS } from "../lib/consts/storage";
import { userProfileSchema } from "../lib/validations/userProfile";

interface SessionContextType {
  saveProfileData: (data: UserProfileWithAvatar) => void;
  clearFormData: () => void;
  saveFormDraft: (draft: Partial<UserProfileWithAvatar>) => void;
  loadFormDraft: () => Partial<UserProfileWithAvatar> | null;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

function loadAndValidateFromStorage<T>(
  key: string,
  schema: { parse: (data: unknown) => T }
): T | null {
  try {
    const saved = sessionStorage.getItem(key);
    if (saved) {
      const parsed = JSON.parse(saved);
      return schema.parse(parsed);
    }
    return null;
  } catch {
    sessionStorage.removeItem(key);
    return null;
  }
}

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { PROFILE_DATA, FORM_DRAFT } = STORAGE_KEYS;

  const saveProfileData = useCallback(
    (data: UserProfileWithAvatar) => {
      sessionStorage.setItem(PROFILE_DATA, JSON.stringify(data));
    },
    [PROFILE_DATA]
  );

  const clearFormData = useCallback(() => {
    sessionStorage.removeItem(FORM_DRAFT);
  }, [FORM_DRAFT]);

  const saveFormDraft = useCallback(
    (draft: Partial<UserProfileWithAvatar>) => {
      sessionStorage.setItem(FORM_DRAFT, JSON.stringify(draft));
    },
    [FORM_DRAFT]
  );

  const loadFormDraft =
    useCallback((): Partial<UserProfileWithAvatar> | null => {
      return loadAndValidateFromStorage<Partial<UserProfileWithAvatar>>(
        FORM_DRAFT,
        userProfileSchema.partial()
      );
    }, [FORM_DRAFT]);

  return (
    <SessionContext.Provider
      value={{
        saveProfileData,
        clearFormData,
        saveFormDraft,
        loadFormDraft,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => {
  const ctx = useContext(SessionContext);
  if (!ctx)
    throw new Error("useSessionContext must be used within SessionProvider");
  return ctx;
};
