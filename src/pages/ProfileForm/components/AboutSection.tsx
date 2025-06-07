import { Textarea } from "../../../components/ui/textarea";
import { Label } from "../../../components/ui/label";
import { useUserDataContext } from "../../../contexts/UserDataContext";

const AboutSection = () => {
  const { form } = useUserDataContext();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="space-y-2">
      <Label htmlFor="about">About You *</Label>
      <Textarea
        id="about"
        {...register("about")}
        placeholder="Tell us about yourself... (minimum 10 characters)"
        className="min-h-[100px]"
        aria-required="true"
        aria-invalid={!!errors.about}
        aria-describedby={errors.about ? "about-error" : undefined}
      />
      {errors.about && (
        <p id="about-error" className="text-sm text-red-600" role="alert">
          {errors.about.message}
        </p>
      )}
    </div>
  );
};

export default AboutSection;
