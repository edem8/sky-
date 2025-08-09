import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Mail, Headset, ThumbsUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-5 md:py-10 xl:py-20 md:mt-8 px-8 md:px-10 hidden md:block ">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 xl:gap-8 mb-8 text-xs lg:text-sm ">
          {/* About Store */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">About Store</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#088F8F]transition-colors"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#088F8F]transition-colors"
                >
                  Promotions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#088F8F]hover:text-green-600 transition-colors"
                >
                  Daily Deals
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#088F8F]transition-colors"
                >
                  Store and Contacts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#088F8F]transition-colors"
                >
                  Delivery and Payment
                </Link>
              </li>
            </ul>
          </div>

          {/* For Customer */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">For Customer</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link
                  href="#"
                  className="hover:text-[#088F8F] transition-colors"
                >
                  Personal Account
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#088F8F] transition-colors"
                >
                  Shopping Cart
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-[#088F8F] transition-colors"
                >
                  Favorites
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-[#088F8F] hover:text-green-600 transition-colors"
                >
                  Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className=" md:col-span-2">
            <div className="flex items-center  gap-4">
              <div className="flex-1">
                <p className="text-gray-600 mb-2 mt-3 md:mt-6 lg:mt-0">
                  Subscribe to newsletter to receive
                </p>

                <div className="flex gap-2 items-center">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 py-6 md:py-7 lg:py-8 xl:py-10 px-6  w-[50vw] md:w-20 lg:w-full tracking-wider text-xs md:text-sm rounded-none"
                  />
                  <Button className="bg-[#088F8F] hover:bg-g[#088F8F]  cursor-pointer py-6 md:py-7 lg:py-8 xl:py-10 rounded-none text-white lg:px-6">
                    <span className="hidden lg:inline">Subscribe </span>
                    <span>
                      <ThumbsUp className="w-8 h-8 inline lg:hidden" />
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-start lg:items-center my-10 lg:my-15 gap-6">
          {/* Contact Info */}
          <div className="hidden md:flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Headset
                className="w-15 h-15 hidden lg:w-20 lg:h-20 text-[#088F8F]"
                strokeWidth={1.6}
              />
              <div>
                <p className="text-xs lg:text-sm">
                  Have questions? Call from 9:00 to 20:00
                </p>
                <div className="flex gap-2 text-sm lg:text-lg font-semibold text-gray-800">
                  <span>024-03-11-010</span>
                  <span className="text-gray-400">or</span>
                  <span>050-0-148-220</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex items-center justify-between  border-gray-200 ">
            <div className="flex items-center gap-4">
              <span className="text-gray-600 text-xs lg:text-sm">
                We&apos;re on social media
              </span>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-[#088F8F] hover:text-white transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-[#088F8F] hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center hover:bg-[#088F8F] hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs lg:text-sm text-gray-500  lg:mt-6 pt-3 lg:pt-6 border-t border-gray-200">
          <p>ETK-SKY home appliances and electronics (c)2025</p>
        </div>
      </div>
    </footer>
  );
}
