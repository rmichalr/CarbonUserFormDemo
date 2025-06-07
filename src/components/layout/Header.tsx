import { Logo } from './Logo';
import { HeaderNav } from './HeaderNav';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Logo />
        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;