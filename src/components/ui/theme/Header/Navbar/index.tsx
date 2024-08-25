import Link from 'next/link';
import NavbarLinks from 'components/ui/theme/Header/NavbarLinks';

const Navbar = () => (
  <div className="container flex items-center justify-between p-6">
    <Link href="/" className="typography dark:text-white text-black flex">
      <img src="/assets/logo.png" alt="Logo" className="w-16 h-16" />
			<div className="flex flex-col justify-center">
      <span className="ml-4 text-2xl font-bold text-gray-600">臺北市立大學</span>
			<span className="ml-4 text-lg font-bold text-gray-600">資訊科學系系學會</span>
			</div>
    </Link>
    <NavbarLinks desktop />
  </div>
);

export default Navbar;
