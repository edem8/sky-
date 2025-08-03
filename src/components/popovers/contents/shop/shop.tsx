import React from "react";
import CategoryItemCard from "./category-card";

const data = [
  {
    name: "Dishwashers",
    desc: "Powerful, Smart and Convenient",
    href: "/",
  },

  {
    name: "Dishwashers",
    desc: "Powerful, Smart and Convenient",
    href: "/",
  },
  {
    name: "Dishwashers",
    desc: "Powerful, Smart and Convenient",
    href: "/",
  },
];

export default function ShopCategories() {
  return (
    <div className="flex items-center space-x-1 py-6  mx-auto">
      {data.map((item, index) => (
        <CategoryItemCard key={index} name={item.name} />
      ))}
    </div>
  );
}
