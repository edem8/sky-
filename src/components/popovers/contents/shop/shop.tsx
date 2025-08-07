import React from "react";
import CategoryItemCard from "./category-card";
import Link from "next/link";

const data = [
  {
    name: "Refrigerators",
    guide: "Refrigerator Buying guide",
    image: "/assets/images/Freezer.png",
  },
  {
    name: "Microwaves",
    guide: "Microwave Buying guide",
    image: "/assets/images/microwave.png",
  },
  {
    name: "Rangers",
    guide: "Ranger Buying guide",
    image: "/assets/images/ranger.png",
  },
  {
    name: "Vaccums",
    guide: "Vaccum Buying guide",
    image: "/assets/images/vaccum.png",
  },
  {
    name: "Dryers",
    guide: "Dryer Buying guide",
    image: "/assets/images/dryer.png",
  },
  {
    name: "Accessories",
    guide: "Accessories Buying guide",
    image: "/assets/images/accessories.png",
  },
];

export default function ShopCategories() {
  return (
    <div className="flex items-start justify-center px-2 lg:px-4 py-8 xl:p-8 border-b">
      {/* Category cards container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 lg:gap-12 xl:gap-20">
        {data.map((item, index) => (
          <div className="flex-shrink-0" key={item.name}>
            <CategoryItemCard name={item.name} image={item.image} />
          </div>
        ))}
      </div>

      {/* Vertical Divider */}
      <div className="w-px h-120 bg-gray-300 mx-3 lg:mx-6 xl:mx-10" />

      {/* Side content (e.g., guide or promo links) */}
      <div className="text-sm text-gray-800 px-2 xl:px-10  ">
        <p className="font-semibold tracking-wider text-xs xl:text-sm pb-2 border-b">
          Purchasing Guide
        </p>
        <ul className="mt-4 space-y-3 flex flex-col  text-xs lg:text-sm">
          {data.map((item, index) => (
            <Link
              href="/"
              key={item.name + index}
              className="hover:underline text-gray-500"
            >
              {item.guide}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
