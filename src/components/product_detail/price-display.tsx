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
  currency = "rub.",
}: PriceDisplayProps) {
  return (
    <div className="space-y-2 tracking-wider">
      <div className="flex items-center gap-2">
        <Badge
          variant="destructive"
          className="text-xs rounded-xs font-semibold  bg-[#088F8F]"
        >
          -{discount}%
        </Badge>
        <p className="text-gray-600 font-semibold">Color</p>
        <span className="text-sm text-gray-500">Silver, Black</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl  font-semibold text-[#088F8F]">
          {currentPrice.toLocaleString()} <span className="text-2xl">GHS</span>
        </span>
        <span className="text-sm text-gray-500">
          {originalPrice.toLocaleString()} <span className="text-xs">GHS</span>
        </span>
      </div>
    </div>
  );
}
