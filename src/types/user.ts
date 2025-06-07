import { userProfileSchema } from "../lib/validations/userProfile";

export type UserProfile = import("zod").infer<typeof userProfileSchema>;

export type UserProfileWithAvatar = Omit<UserProfile, 'avatar'> & {
  avatar: string | null;
};
