import { Snowflake } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Brand() {
  return (
    <Link href="/" className="flex items-center space-x-4 w-100 ">
      <Snowflake className="text-[#088F8F] w-15 h-15 animate-bounce " />
      <div className="flex flex-col gap-1 max-w-4/7">
        <div className="font-bold text-2xl text-gray-800 ">SKY</div>
        <div className="text-xs text-gray-500">
          Best products and prices in electronics & appliances in Ghana
        </div>
      </div>
    </Link>
  );
}
