import { Logo } from './Logo';
import { HeaderNav } from './HeaderNav';

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-section">
          <Logo />
        </div>
        <div className="header__nav-section">
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;