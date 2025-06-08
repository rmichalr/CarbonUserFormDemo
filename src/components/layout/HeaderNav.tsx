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
    <nav className="nav">
      <ul className="nav__list">
        {navItems.map(({ to, icon: Icon, label, match }) => (
          <li key={to}>
            <Link
              to={to}
              className={`nav__link ${
                location.pathname === match ? 'nav__link--active' : ''
              }`}
            >
              <Icon className="nav__link-icon" />
              <span className="nav__link-text">{label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};