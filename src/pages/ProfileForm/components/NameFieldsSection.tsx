import { Input } from "../../../components/carbon-ui";
import { Label } from "../../../components/carbon-ui";
import { useUserDataContext } from "../../../contexts/UserDataContext";

const NameFieldsSection = () => {
  const { form } = useUserDataContext();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="form-section__name-fields">
      <div className="field__wrapper">
        <Label htmlFor="firstName" className="field__label label--required">First Name</Label>
        <Input
          id="firstName"
          {...register("firstName")}
          placeholder="Enter your first name"
          className="field__input input"
          aria-required={true}
          aria-invalid={!!errors.firstName}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
        />
        {errors.firstName && (
          <p id="firstName-error" className="field__error" role="alert">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div className="field__wrapper">
        <Label htmlFor="lastName" className="field__label label--required">Last Name</Label>
        <Input
          id="lastName"
          {...register("lastName")}
          placeholder="Enter your last name"
          className="field__input input"
          aria-required={true}
          aria-invalid={!!errors.lastName}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
        />
        {errors.lastName && (
          <p id="lastName-error" className="field__error" role="alert">
            {errors.lastName.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default NameFieldsSection;
