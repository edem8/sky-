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
      className={`border-0 shadow-none aspect-square md:py-0  relative ${className}`}
    >
      <CardContent className=" flex justify-center p-0 ">
        <Image
          src={"/assets/images/categories/freezer.png"}
          alt={alt}
          width={500}
          height={500}
          className=" w-[800px] sm:w-[900px] md:w-[500px] lg:w-[400px] object-contain "
        />
      </CardContent>
    </Card>
  );
}
