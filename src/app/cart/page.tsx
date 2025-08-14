"use client";

import { CartItem } from "@/components/cart/cart-item";
import { CouponSection } from "@/components/cart/coupon-section";
import { OrderSummary } from "@/components/cart/order-summary";
import { useState } from "react";

interface CartItemType {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}
export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      id: 1,
      name: "Atlant Refrigerator MXM 4025-000",
      price: 1250,
      quantity: 1,
      image: "/assets/images/categories/freezer.png",
    },
    {
      id: 2,
      name: "Tester Microwave Oven ME-2053",
      price: 185,
      quantity: 2,
      image: "/assets/images/categories/microwave.png",
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-3xl lg:max-w-4xl mx-auto space-y-6">
        {/* Cart Items */}
        <div className="space-y-2">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              {...item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>

        {/* Coupon + Order Summary in a row below */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <CouponSection />
          </div>
          <div className="w-full md:w-1/2">
            <OrderSummary total={getTotalPrice()} />
          </div>
        </div>
      </div>
    </div>
  );
}
