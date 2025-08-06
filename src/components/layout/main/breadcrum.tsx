import Link from "next/link";
import { ChevronRight } from "lucide-react";

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Home Applicances", href: "/" },
  {
    label: "Refrigerators",
    href: "/kitchen/refrigerators/fridges",
    active: true,
  },
];

export function Breadcrumb() {
  return (
    <nav className=" border-muted/50 py-4 xl:py-2">
      <div className="container mx-auto px-4">
        <ol className="flex items-center space-x-2 text-sm text-gray-600">
          {breadcrumbItems.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="w-4 h-4 mx-2" />}
              {item.active ? (
                <span className="text-[#088F8F]">{item.label}</span>
              ) : (
                <Link href={item.href} className="hover:text-[#088F8F]">
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumb;
