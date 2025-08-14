"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CouponSection() {
  const [couponCode, setCouponCode] = useState("");

  return (
    <div className="bg-white rounded p-6 shadow-sm border">
      <h3 className="text-gray-700 mb-4 text-sm">
        Do you have a discount coupon?
      </h3>
      <div className="flex gap-3">
        <Input
          placeholder="Enter code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          className="flex-1 rounded-none py-7 "
        />
        <Button className="bg-[#088F8F] hover:bg-[#088F8F] rounded-none py-7 cursor-pointer text-white px-6">
          Activate
        </Button>
      </div>
    </div>
  );
}
