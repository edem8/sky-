import React from "react";
import CategoryItem from "./category-item";

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

export default function Categories() {
  return (
    <div className="flex items-center justify-around">
      {data.map((item, index) => (
        <CategoryItem
          key={index}
          name={item.name}
          href={item.href}
          desc={item.desc}
        />
      ))}
    </div>
  );
}
