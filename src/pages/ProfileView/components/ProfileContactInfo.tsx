import { Mail, Phone, Calendar } from "lucide-react";

type ProfileContactInfoProps = {
  profileData: {
    email: string;
    phone: string;
    birthday: string;
  };
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ProfileContactInfo({ profileData }: ProfileContactInfoProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">
        Contact Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Mail className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm font-medium text-gray-700">Email</p>
            <p className="text-gray-900">
              <a
                href={`mailto:${profileData.email}`}
                className="hover:underline text-blue-700"
              >
                {profileData.email}
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
          <Phone className="w-5 h-5 text-green-600" />
          <div>
            <p className="text-sm font-medium text-gray-700">Phone</p>
            <p className="text-gray-900">
              <a
                href={`tel:${profileData.phone}`}
                className="hover:underline text-green-700"
              >
                {profileData.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
        <Calendar className="w-5 h-5 text-purple-600" />
        <div>
          <p className="text-sm font-medium text-gray-700">Birthday</p>
          <p className="text-gray-900">{formatDate(profileData.birthday)}</p>
        </div>
      </div>
    </div>
  );
}
