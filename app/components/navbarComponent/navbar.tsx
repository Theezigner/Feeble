import Image from "next/image";
import NavLink from "./navLinks";
import ContactSales from "./contactSales";
import HamburgerMenu from "./hamburgerMenu";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center w-[90%] md:w-[95%] lg:w-[1200px] md:h-[81px] bg-white shadow-navbar rounded-[200px] pl-6 md:p-5 p-2 max-w-[1200px]">
      <div className="flex-shrink-0">
        <Image
          src="/assets/coupLogo.svg"
          alt="Coup"
          width={107}
          height={34}
          className="w-[80px] md:w-[90px] lg:w-[107px] h-auto"
        />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavLink />
      </div>

      {/* Desktop Contact Sales Button */}
      <div className="hidden md:block">
        <ContactSales />
      </div>

      {/* Mobile Hamburger Menu */}
      <HamburgerMenu />
    </nav>
  );
}
