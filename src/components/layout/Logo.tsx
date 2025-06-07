import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center">
    <Link to="/" className="flex items-center space-x-2 text-xl font-bold text-gray-900">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <User className="w-5 h-5 text-white" />
      </div>
      <span>UserProfile</span>
    </Link>
  </div>
);
