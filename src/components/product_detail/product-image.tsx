import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ProductImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function ProductImage({ src, alt, className }: ProductImageProps) {
  return (
    <Card
      className={`border-0 shadow-none aspect-square relative ${className}`}
    >
      <CardContent className=" flex justify-center  ">
        <Image
          src={src || "/assets/images/details/refrigerators/refriferator.jpg"}
          alt={alt}
          width={300}
          height={400}
          className="object-contain"
        />
      </CardContent>
    </Card>
  );
}
