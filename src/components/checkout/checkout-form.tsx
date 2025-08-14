"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

interface FormData {
  firstName: string;
  lastName: string;
  address: string;
  settlement: string;
  phone: string;
  email: string;
  registerMe: boolean;
  differentAddress: boolean;
  notes: string;
}

export default function CheckoutForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    address: "",
    settlement: "",
    phone: "",
    email: "",
    registerMe: true,
    differentAddress: false,
    notes: "",
  });

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white p-3 sm:p-6 rounded-lg">
      <h2 className="text-xl font-medium text-gray-800 mb-6">Order Details</h2>

      <div className="space-y-4">
        {/* Name and Family Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-sm text-gray-700">
              First Name <span className="text-[#088F8F]">*</span>
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              className="mt-1 py-6 sm:py-7 text-xs sm:text-sm lg:py-8 rounded-none "
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-sm text-gray-700">
              Last Name
            </Label>
            <Input
              id="lastName"
              value={formData.lastName}
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              className="mt-1 py-6 sm:py-7 text-xs sm:text-sm lg:py-8 rounded-none"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <Label htmlFor="address" className="text-sm text-gray-700">
            Address <span className="text-[#088F8F]">*</span>
          </Label>
          <Input
            id="address"
            placeholder="Street name and house number and apartment"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            className="mt-1 py-6 sm:py-7 text-xs sm:text-sm lg:py-8 rounded-none"
          />
        </div>

        {/* Settlement */}
        <div>
          <Label htmlFor="settlement" className="text-sm text-gray-700">
            City/Town <span className="text-[#088F8F]">*</span>
          </Label>
          <Input
            id="settlement"
            value={formData.settlement}
            onChange={(e) => handleInputChange("settlement", e.target.value)}
            className="mt-1 py-6 sm:py-7 text-xs sm:text-sm lg:py-8 rounded-none"
          />
        </div>

        {/* Phone and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="phone" className="text-sm text-gray-700">
              Phone <span className="text-[#088F8F]">*</span>
            </Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="mt-1 py-6 sm:py-7 text-xs sm:text-sm lg:py-8 rounded-none"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm text-gray-700">
              Email Address <span className="text-[#088F8F]">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="mt-1 py-6 sm:py-7 text-xs sm:text-sm lg:py-8 rounded-none"
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="register"
              checked={formData.registerMe}
              onCheckedChange={(checked) =>
                handleInputChange("registerMe", checked as boolean)
              }
              className="data-[state=checked]:bg-[#088F8F] data-[state=checked]:border-[#088F8F]"
            />
            <Label htmlFor="register" className="text-sm text-gray-700">
              Create an account?
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="differentAddress"
              checked={formData.differentAddress}
              className="data-[state=checked]:bg-[#088F8F] data-[state=checked]:border-[#088F8F]"
              onCheckedChange={(checked) =>
                handleInputChange("differentAddress", checked as boolean)
              }
            />
            <Label htmlFor="differentAddress" className="text-sm text-gray-700">
              Ship to a different address?
            </Label>
          </div>
        </div>

        {/* Notes */}
        <div className="pt-4">
          <Label htmlFor="notes" className="text-sm text-gray-700 ">
            Order Notes <span className="text-gray-400">(optional)</span>
          </Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => handleInputChange("notes", e.target.value)}
            className="mt-1 py-6 sm:py-7 text-xs sm:text-sm lg:py-8 rounded-none min-h-[100px]"
            placeholder="Notes about your order, e.g. special notes for delivery."
          />
        </div>
      </div>
    </div>
  );
}
