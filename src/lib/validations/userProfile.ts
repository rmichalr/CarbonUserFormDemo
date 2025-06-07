import { z } from "zod";

export const userProfileSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters"),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(
      /^\d{3}([ -]?)\d{3}\1\d{3}$/,
      "Please enter a valid 9-digit phone number (digits only, with dashes or spaces)"
    ),
  birthday: z
    .string()
    .min(1, "Birthday is required")
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - selectedDate.getFullYear();
      const monthDiff = today.getMonth() - selectedDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < selectedDate.getDate())
      ) {
        return age - 1 >= 13 && age - 1 <= 120;
      }

      return age >= 13 && age <= 120;
    }, "Age must be between 13 and 120 years"),
  about: z
    .string()
    .min(10, "About section must be at least 10 characters")
    .max(500, "About section must be less than 500 characters"),
  avatar: z.string().nullable().optional(),
});
