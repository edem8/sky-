import React from "react";

export default function Total() {
  return (
    <div className="flex flex-col md:text-center md:gap-1">
      <span className="text-xs  text-white md:text-gray-600">
        Total <span className="hidden md:inline">(GHS)</span>
      </span>
      <span className="md:text-sm font-semibold text-white md:text-[#088F8F]">
        0.00
      </span>
    </div>
  );
}
