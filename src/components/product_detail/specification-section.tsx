import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SpecificationSection as SpecificationSectionType } from "@/types/product";

interface SpecificationSectionProps {
  section: SpecificationSectionType;
}

export function SpecificationSection({ section }: SpecificationSectionProps) {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <CardTitle className="lg:text-base  px-0 font-semibold text-[#088F8] pb-1 md:pb-2 border-b border-muted/50 mb-0">
          {section.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center">
          {section.items.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-2/3 flex justify-center py-2"
            >
              <div className="flex flex-col md:flex-row w-full justify-between items-start md:items-center gap-2">
                <span className="text-gray-600 text-xs lg:text-sm font-medium md:w-1/2">
                  {item.label}
                </span>
                <span className="text-gray-800 text-xs lg:text-sm md:w-1/2">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
