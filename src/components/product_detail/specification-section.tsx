import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import type { SpecificationSection as SpecificationSectionType } from "@/types/product"

interface SpecificationSectionProps {
  section: SpecificationSectionType
}

export function SpecificationSection({ section }: SpecificationSectionProps) {
  return (
    <Card className="border-0 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-green-700 bg-green-50 p-3 rounded-md -m-6 mb-0">
          {section.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="space-y-3">
          {section.items.map((item, index) => (
            <div key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3">
                <span className="text-gray-600 text-sm font-medium">{item.label}</span>
                <span className="text-gray-800 text-sm">{item.value}</span>
              </div>
              {index < section.items.length - 1 && <Separator />}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
