import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

export const Logo = () => (
  <div className="logo">
    <Link to="/" className="logo__link">
      <div className="logo__icon">
        <User className="logo__icon-svg" />
      </div>
      <span className="logo__text">CarbonUserProfile</span>
    </Link>
  </div>
);
