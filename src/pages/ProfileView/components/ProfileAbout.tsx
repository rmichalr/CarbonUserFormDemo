import { User } from "lucide-react";

type ProfileAboutProps = {
  profileData: {
    about: string;
  };
};

export function ProfileAbout({ profileData }: ProfileAboutProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
        About
      </h3>
      <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
        <User className="w-5 h-5 text-gray-600 mt-0.5" />
        <div>
          <p className="text-gray-900 leading-relaxed whitespace-pre-wrap break-words">
            {profileData.about}
          </p>
        </div>
      </div>
    </div>
  );
}
