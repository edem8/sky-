import { Badge } from "@/components/ui/badge";

interface PriceDisplayProps {
  currentPrice: number;
  originalPrice: number;
  discount: number;
  currency?: string;
}

export function PriceDisplay({
  currentPrice,
  originalPrice,
  discount,
}: PriceDisplayProps) {
  return (
    <div className="space-y-2 tracking-wider">
      <div className="flex items-center gap-2">
        <Badge
          variant="destructive"
          className="text-xs rounded-none px-1 md:py-1 lg:px-2 font-semibold  bg-[#088F8F]"
        >
          -{discount}%
        </Badge>
        <p className="text-gray-600 font-semibold">Color</p>
        <span className="text-xs font-medium text-gray-500">Silver, Black</span>
      </div>
      <div className="flex items-baseline gap-3 sm:gap-2">
        <span className=" text-xl  font-semibold text-[#088F8F]">
          {currentPrice.toLocaleString()} <span className="text-xl">GHS</span>
        </span>
        <span className=" text-gray-500 line-through font-medium">
          {originalPrice.toLocaleString()}{" "}
          <span className="">GHS</span>
        </span>
      </div>
    </div>
  );
}
