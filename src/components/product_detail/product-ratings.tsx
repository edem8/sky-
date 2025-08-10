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
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "fill-[#088F8F] text-[#088F8F]" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <Badge variant="secondary" className="text-xs bg-gray-50">
        {reviewCount} reviews
      </Badge>
    </div>
  );
}
