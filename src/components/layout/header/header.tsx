import Link from "next/link";
import Country from "../../popovers/Triggers/country";
import Download from "../../popovers/Triggers/download";
import Finder from "./finder";
import Shop from "@/components/popovers/Triggers/shop";
import Brands from "@/components/popovers/Triggers/brands";
import ShippingAndPayment from "@/components/popovers/Triggers/shipping-payment";
import ContactAndHelp from "@/components/popovers/Triggers/contact";
import LoginIcons from "./login-icons";
import Total from "./total";

export function Header() {
  return (
    <header className="bg-white w-full sticky top-0 z-50  ">
      <div className="border-b relative">
        {/* Top navigation */}
        <div className="flex items-center justify-between py-8 text-xs lg:text-sm text-gray-600 bg-[#088F8F] px-2 lg:px-4 ">
          <Download />

          <nav className="flex items-center text-xs lg:text-sm xl:space-x-8 mx-auto  divide-x-1 lg:divide-x-2 ">
            <Link
              href="#"
              className="text-white font-semibold hover:text-gray-300 px-3 lg:px-4 xl:pr-6 "
            >
              <Shop />
            </Link>
            <Link
              href="#"
              className="text-white font-semibold hover:text-gray-300 px-3 lg:px-4 xl:pr-6"
            >
              <Brands />
            </Link>
            <Link
              href="#"
              className="text-white font-semibold hover:text-gray-300 px-3 lg:px-4 xl:pr-6"
            >
              <ShippingAndPayment />
            </Link>

            <Link
              href="#"
              className="text-white font-semibold hover:text-gray-300 px-3 lg:px-4 xl:pr-6"
            >
              <ContactAndHelp />
            </Link>
          </nav>
          <div className="flex items-center gap-1 lg:gap-2">
            <Country />
            <LoginIcons />
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-center space-x-6 lg:space-x-8 xl:space-x-12 py-7">
          <Finder />
          <Total />
        </div>
      </div>
    </header>
  );
}

export default Header;
