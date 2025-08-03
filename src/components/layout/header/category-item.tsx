import Image from "next/image";
import Link from "next/link";
import React from "react";

interface categoryItemProps {
  name: string;
  desc: string;
  href: string;
}

export default function CategoryItem({ name, desc, href }: categoryItemProps) {
  return (
    <Link key={name} href={href}>
      <div className="flex items-center gap-1">
        <Image
          src="/assets/images/Freezer.png"
          alt={`${name} ${desc}`}
          width={100}
          height={100}
          className=""
        />
        <div className="flex flex-col space-y-8">
          <p>{name}</p>
          <p>{desc}</p>
        </div>
      </div>
    </Link>
  );
}
