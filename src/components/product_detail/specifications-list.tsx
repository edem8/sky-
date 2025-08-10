import { Card, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SpecificationSection } from "./specification-section"
import type { SpecificationSection as SpecificationSectionType } from "@/types/product"

interface SpecificationsListProps {
  sections: SpecificationSectionType[]
}

export function SpecificationsList({ sections }: SpecificationsListProps) {
  return (
    <div className="space-y-6">
      <Card className="border-0 shadow-sm">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg font-semibold text-green-700">Product Specifications</CardTitle>
            <Badge variant="outline" className="text-green-600 border-green-600">
              Reviews
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {sections.map((section, index) => (
        <SpecificationSection key={index} section={section} />
      ))}
    </div>
  )
}
