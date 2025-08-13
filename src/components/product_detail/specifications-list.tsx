import { SpecificationSection } from "./specification-section";
import type { SpecificationSection as SpecificationSectionType } from "@/types/product";

interface SpecificationsListProps {
  sections: SpecificationSectionType[];
}

export function SpecificationsList({ sections }: SpecificationsListProps) {
  return (
    <div className="space-y-6">
      {sections.map((section, index) => (
        <SpecificationSection key={index} section={section} />
      ))}
    </div>
  );
}
