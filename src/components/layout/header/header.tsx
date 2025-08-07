"use client";

import { useState } from "react";
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
import { IoMenu, IoClose } from "react-icons/io5";

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <header className="bg-white w-full sticky top-0 z-50">
      <div className="border-b relative">
        {/* Top navigation */}
        <div className="flex items-center justify-between py-8 text-xs lg:text-sm text-gray-600 bg-[#088F8F] px-2 lg:px-4">
          <Download />

          {/* Hamburger menu button - mobile only */}
          <button
            className="text-white text-3xl  px-2 md:hidden"
            onClick={toggleDrawer}
            aria-label="Toggle navigation"
          >
            <IoMenu />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center text-xs lg:text-sm xl:space-x-8 mx-auto divide-x-1 lg:divide-x-2">
            <Link
              href="#"
              className="text-white font-semibold hover:text-gray-300 px-3 lg:px-4 xl:pr-6"
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

          <div className="flex items-center gap-2 md:gap-1 lg:gap-2">
            <Country />
            <div className=" md:hidden">
              <Total />
            </div>
            <LoginIcons />
          </div>
        </div>

        {/* Drawer - mobile menu with smooth slide-in */}
        <div
          className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ease-in-out ${
            isDrawerOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
          onClick={closeDrawer}
        >
          <div
            className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg p-6 space-y-4 transform transition-transform duration-300 ease-in-out ${
              isDrawerOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold text-gray-800">Menu</span>
              <button onClick={closeDrawer} aria-label="Close menu">
                <IoClose className="text-2xl" />
              </button>
            </div>
            <div className="flex flex-col space-y-4 text-sm text-gray-800 font-medium">
              <Link href="#" onClick={closeDrawer}>
                <Shop />
              </Link>
              <Link href="#" onClick={closeDrawer}>
                <Brands />
              </Link>
              <Link href="#" onClick={closeDrawer}>
                <ShippingAndPayment />
              </Link>
              <Link href="#" onClick={closeDrawer}>
                <ContactAndHelp />
              </Link>
            </div>
          </div>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-center px-4 md:space-x-6 lg:space-x-8 xl:space-x-12 py-7">
          <Finder />
          <div className="hidden md:block">
            <Total />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
