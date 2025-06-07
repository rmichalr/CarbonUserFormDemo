import { Link, useLocation } from 'react-router-dom';
import { User, UserPlus } from 'lucide-react';

const navItems = [
  {
    to: '/',
    icon: UserPlus,
    label: 'Create Profile',
    match: '/',
  },
  {
    to: '/profile',
    icon: User,
    label: 'View Profile',
    match: '/profile',
  },
];

export const HeaderNav = () => {
  const location = useLocation();

  return (
    <nav className="flex space-x-4">
      {navItems.map(({ to, icon: Icon, label, match }) => (
        <Link
          key={to}
          to={to}
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            location.pathname === match
              ? 'bg-blue-100 text-blue-700'
              : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          <Icon className="w-4 h-4 inline md:mr-2" />
          <span className="hidden md:inline">{label}</span>
        </Link>
      ))}
    </nav>
  );
};