interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  return (
    <div className="flex justify-between items-center py-2">
      <div className="flex-1">
        <div className="text-xs sm:text-sm text-gray-700 font-semibold">
          {product.name}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-[#088F8F] text-xs sm:text-sm font-semibold">
          ×{product.quantity}
        </span>
        <span className="font-medium text-xs sm:text-sm text-gray-700 ">
          GHS {product.price.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
