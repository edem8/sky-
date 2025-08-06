import Image from "next/image";
import Link from "next/link";
import React from "react";

interface categoryItemProps {
  name: string;
  image: string;
  key: number;
}

export default function CategoryItemCard({
  key,
  name,
  image,
}: categoryItemProps) {
  return (
    <Link key={key} href="/">
      <div className="flex flex-col items-center tracking-wider font-semibold text-gray-600 gap-4">
        <div className="overflow-hidden">
          <Image
            src={image}
            alt={`${name} image`}
            width={120}
            height={120}
            className="transition-transform transform hover:scale-110"
          />
        </div>
        <p>{name}</p>
      </div>
    </Link>
  );
}
