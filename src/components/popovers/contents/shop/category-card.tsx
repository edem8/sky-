import Image from "next/image";
import Link from "next/link";
import React from "react";

interface categoryItemProps {
  name: string;
}

export default function CategoryItemCard({ name }: categoryItemProps) {
  return (
    <Link key={name} href="/">
      <div className="flex items-center gap-4">
        <Image
          src="/assets/images/Freezer.png"
          alt={`${name}`}
          width={100}
          height={100}
          className=""
        />
        <p>{name}</p>
      </div>
    </Link>
  );
}
