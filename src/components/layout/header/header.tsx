import Link from "next/link";
import User from "../../popovers/Triggers/user";
import Country from "../../popovers/Triggers/country";
import Downlaod from "../../popovers/Triggers/download";
import Brand from "./brand";
import Finder from "./finder";
import Icons from "./icons";
import Categories from "./categories";
import Shop from "@/components/popovers/Triggers/shop";
import Brands from "@/components/popovers/Triggers/brands";
import ShippingAndPayment from "@/components/popovers/Triggers/shipping-payment";
import ContactAndHelp from "@/components/popovers/Triggers/contact";

export function Header() {
  return (
    <header className="bg-white w-full sticky top-0 z-50  ">
      <div className="border-b relative">
        {/* Top navigation */}
        <div className="flex items-center justify-between py-8 text-sm text-gray-600 bg-[#088F8F] px-4 ">
          <Downlaod />
          <nav className="flex items-center space-x-8 mx-auto divide-x-2 ">
            <Link
              href="#"
              className="text-white font-semibold hover:text-gray-300 pr-6 "
            >
              <Shop />
            </Link>
            <Link
              href="#"
              className="text-white font-semibold hover:text-gray-300 pr-6"
            >
              <Brands />
            </Link>
            <Link
              href="#"
              className="text-white font-semibold hover:text-gray-300 pr-6"
            >
              <ShippingAndPayment />
            </Link>

            <Link
              href="#"
              className="text-white font-semibold hover:text-gray-300 pr-6"
            >
              <ContactAndHelp />
            </Link>
          </nav>
          <div className="flex items--center gap-2">
            <Country />
            <User />
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-center space-x-12 py-7">
          <div className="flex items-center  ">
            {/* <Brand /> */}
            <Finder />
          </div>
          <Icons />
        </div>

        {/* categories */}
        {/* <div className="mx-auto text-xs border-t py-8  bg-[#F8F8F8]">
          <Categories />
        </div> */}
      </div>
    </header>
  );
}

export default Header;
