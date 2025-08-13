import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface ProductRatingProps {
  rating: number;
  reviewCount: number;
  maxRating?: number;
}

export function ProductRating({
  rating,
  reviewCount,
  maxRating = 5,
}: ProductRatingProps) {
  return (
    <div className="flex text-xs lg:text-sm items-center gap-3 ">
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 md:w-3 md:h-3 lg:w-4 lg:h-4 ${
              i < rating ? "fill-[#088F8F] text-[#088F8F]" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <Badge variant="secondary" className="text-xs lg:text-sm bg-gray-50">
        {reviewCount} reviews
      </Badge>
    </div>
  );
}
