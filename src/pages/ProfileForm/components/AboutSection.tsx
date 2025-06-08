import { Textarea } from "../../../components/carbon-ui";
import { Label } from "../../../components/carbon-ui";
import { useUserDataContext } from "../../../contexts/UserDataContext";

const AboutSection = () => {
  const { form } = useUserDataContext();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className="form-section__about">
      <Label htmlFor="about" className="field__label label--required">About You</Label>
      <Textarea
        id="about"
        {...register("about")}
        placeholder="Tell us about yourself... (minimum 10 characters)"
        className="field__input textarea"
        aria-required={true}
        aria-invalid={!!errors.about}
        aria-describedby={errors.about ? "about-error" : undefined}
      />
      {errors.about && (
        <p id="about-error" className="field__error" role="alert">
          {errors.about.message}
        </p>
      )}
    </div>
  );
};

export default AboutSection;
