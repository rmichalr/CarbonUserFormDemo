import { Input } from "../../../components/carbon-ui";
import { Label } from "../../../components/carbon-ui";
import { useUserDataContext } from "../../../contexts/UserDataContext";

const ContactInfoSection = () => {
  const { form } = useUserDataContext();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="form-section__contact-info">
      <div className="field__wrapper">
        <Label htmlFor="email" className="field__label label--required">Email Address</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Enter your email address"
          className="field__input input"
          aria-required={true}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="field__error" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>
      <div className="field__wrapper">
        <Label htmlFor="phone" className="field__label label--required">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          placeholder="Enter your phone number"
          className="field__input input"
          aria-required={true}
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : "phone-help"}
        />
        <p id="phone-help" className="field__help">
          Formats: 111222333 · 111-222-333 · 111 222 333
        </p>
        {errors.phone && (
          <p id="phone-error" className="field__error" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>
      <div className="field__wrapper">
        <Label htmlFor="birthday" className="field__label label--required">Birthday</Label>
        <Input
          id="birthday"
          type="date"
          {...register("birthday")}
          className="field__input input"
          aria-required={true}
          aria-invalid={!!errors.birthday}
          aria-describedby={errors.birthday ? "birthday-error" : undefined}
        />
        {errors.birthday && (
          <p
            id="birthday-error"
            className="field__error"
            role="alert"
          >
            {errors.birthday.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactInfoSection;
