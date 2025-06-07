import { Link } from "react-router-dom";
import { Card, CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";

export const NoProfileData = () => (
  <Card className="max-w-2xl mx-auto text-center shadow-2xl border-none">
    <CardContent className="pt-6">
      <p className="text-gray-600 mb-4">No profile data found.</p>
      <Link to="/">
        <Button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-lg transition-colors duration-200"
        >
          Create Profile
        </Button>
      </Link>
    </CardContent>
  </Card>
);
