"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import ProductItem from "./product-item";

const products = [
  {
    id: 1,
    name: "Tesler ME-2053 Microwave Oven",
    quantity: 2,
    price: 5720,
  },
  {
    id: 2,
    name: "Tesler ME-2053 Microwave Oven",
    quantity: 1,
    price: 2320,
  },
];

export default function CheckoutSummary() {
  const [deliveryMethod, setDeliveryMethod] = useState("pickup");

  const subtotal = products.reduce((sum, product) => sum + product.price, 0);
  const deliveryFee = 0;
  const total = subtotal + deliveryFee;

  return (
    <div className="bg-white p-6 rounded-lg">
      <h2 className="text-xl font-medium text-gray-800 mb-6">Your Order</h2>

      {/* Product Items */}
      <div className="space-y-4 mb-6">
        <div className="text-sm font-medium text-gray-700 mb-3">Product</div>

        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>

      {/* Subtotal */}
      <div className="border-t pt-4 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-700 text-sm sm:text-base">Subtotal</span>
          <span className="font-medium text-[#088F8F]">
            GHS {subtotal.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Delivery Section */}
      <div className="mt-4 space-y-3 ">
        <div className="flex justify-between">
          <span className="text-gray-700 text-sm sm:text-base">Shipping</span>
          <span className="font-medium text-[#088F8F]">GHS {deliveryFee} </span>
        </div>

        <RadioGroup value={deliveryMethod} onValueChange={setDeliveryMethod}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="pickup"
              id="pickup"
              className="text-[#088F8F]  data-[state=checked]:border-[#088F8F]"
            />
            <Label htmlFor="pickup" className="text-sm">
              <div className="flex items-center gap-2">Store Pickup</div>
              <div className="text-xs text-gray-500 ml-4">Store Address</div>
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <RadioGroupItem
              value="delivery"
              id="delivery"
              className=" data-[state=checked]:border-[#088F8F]"
            />
            <Label htmlFor="delivery" className="text-sm">
              <div className="flex items-center gap-2">Home Delivery</div>
              <div className="text-xs text-gray-500 ml-4">Delivery Address</div>
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Total */}
      <div className="border-t mt-6 pt-4">
        <div className="flex justify-between items-center">
          <span className="text-sm sm:text-base font-semibold">TOTAL</span>
          <div className="text-right">
            <div className="text-xl font-bold text-[#088F8F]">
              GHS {total.toLocaleString()}{" "}
            </div>
            <div className="text-xs text-gray-500">including taxes</div>
          </div>
        </div>
      </div>

      {/* Privacy Notice */}
      <div className="mt-6 text-xs text-gray-500 leading-relaxed">
        Your personal data will be used to process your order, support your
        experience throughout this website, and for other purposes described in
        our privacy policy.
      </div>

      {/* Submit Button */}
      <Button className="w-full mt-6 bg-[#088F8F] hover:bg-[#088F8F] cursor-pointer text-white py-8 rounded-none text-base font-medium">
        Place Order
      </Button>
    </div>
  );
}
