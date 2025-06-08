import { Link } from "react-router-dom";
import { Card, CardContent } from "../../../components/carbon-ui";
import { Button } from "../../../components/carbon-ui";

export const NoProfileData = () => (
  <Card className="card--max-width-2xl card--borderless">
    <CardContent className="no-profile">
      <div className="no-profile__icon">
        <p className="no-profile__title">No Profile Data Found</p>
      </div>
      <p className="no-profile__description">No profile data found.</p>
      <div className="no-profile__action">
        <Link to="/">
          <Button
            type="submit"
            className="btn btn--primary"
          >
            <span>Create Profile</span>
          </Button>
        </Link>
      </div>
    </CardContent>
  </Card>
);
