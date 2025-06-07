import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useUserDataContext } from "../../../contexts/UserDataContext";

const ContactInfoSection = () => {
  const { form } = useUserDataContext();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Enter your email address"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            {...register("phone")}
            placeholder="Enter your phone number"
            aria-required="true"
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? "phone-error" : "phone-help"}
          />
          <p id="phone-help" className="text-xs text-gray-500">
            Formats: 111222333 · 111-222-333 · 111 222 333
          </p>
          {errors.phone && (
            <p id="phone-error" className="text-sm text-red-600" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="birthday">Birthday *</Label>
          <Input
            id="birthday"
            type="date"
            {...register("birthday")}
            aria-required="true"
            aria-invalid={!!errors.birthday}
            aria-describedby={errors.birthday ? "birthday-error" : undefined}
          />
          {errors.birthday && (
            <p
              id="birthday-error"
              className="text-sm text-red-600"
              role="alert"
            >
              {errors.birthday.message}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ContactInfoSection;
