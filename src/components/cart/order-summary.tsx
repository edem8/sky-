import { Button } from "@/components/ui/button";
import Link from "next/link";

interface OrderSummaryProps {
  total: number;
}

export function OrderSummary({ total }: OrderSummaryProps) {
  const itemCount = 2;
  const formatPrice = (price: number) => `GHS ${price.toFixed(2)}`;

  return (
    <div className="bg-white rounded p-6 shadow-sm border sticky top-4">
      <h2 className="text-[#088F8F] text-lg font-medium mb-6 py-3 border-b border-muted/50">
        Cart Summary
      </h2>

      <div className="space-y-4 text-sm mb-6">
        <div className="flex justify-between">
          <span className="text-gray-700">Items in Cart</span>
          <span className="font-semibold text-gray-700">{itemCount}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-700">Estimated Total</span>
          <span className="font-semibold text-[#088F8F] text-base">
            {formatPrice(total)}
          </span>
        </div>
      </div>

      <Link href="/checkout">
        <Button className="w-full bg-[#088F8F] py-7 hover:bg-[#088F8F] text-white cursor-pointer rounded-none text-base">
          Continue to Checkout
        </Button>
      </Link>
    </div>
  );
}
