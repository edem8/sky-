import { Item } from "@radix-ui/react-select";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface categoryItemProps {
  name: string;
  image: string;
}

export default function CategoryItemCard({ name, image }: categoryItemProps) {
  return (
    <Link key={Item.name} href="/">
      <div className="flex flex-col items-center tracking-wider font-semibold text-gray-600 gap-2 lg:gap-4">
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={`${name} image`}
            width={120}
            height={120}
            className="transition-transform transform hover:scale-110"
          />
        </div>
        <p className="text-sm">{name}</p>
      </div>
    </Link>
  );
}
