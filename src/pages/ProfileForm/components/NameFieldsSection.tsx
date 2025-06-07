import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { useUserDataContext } from "../../../contexts/UserDataContext";

const NameFieldsSection = () => {
  const { form } = useUserDataContext();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="firstName">First Name *</Label>
        <Input
          id="firstName"
          {...register("firstName")}
          placeholder="Enter your first name"
          aria-required="true"
          aria-invalid={!!errors.firstName}
          aria-describedby={errors.firstName ? "firstName-error" : undefined}
        />
        {errors.firstName && (
          <p id="firstName-error" className="text-sm text-red-600" role="alert">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="lastName">Last Name *</Label>
        <Input
          id="lastName"
          {...register("lastName")}
          placeholder="Enter your last name"
          aria-required="true"
          aria-invalid={!!errors.lastName}
          aria-describedby={errors.lastName ? "lastName-error" : undefined}
        />
        {errors.lastName && (
          <p id="lastName-error" className="text-sm text-red-600" role="alert">
            {errors.lastName.message}
          </p>
        )}
      </div>
    </div>
  );
};

export default NameFieldsSection;
