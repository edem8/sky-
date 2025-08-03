import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckboxFilterProps } from "@/types/props";

export function CheckboxFilter({
  title,
  options,
  selectedValues,
  onSelectionChange,
}: CheckboxFilterProps) {
  const handleChange = (value: string, checked: boolean) => {
    if (checked) {
      onSelectionChange([...selectedValues, value]);
    } else {
      onSelectionChange(selectedValues.filter((v) => v !== value));
    }
  };

  return (
    <div className="space-y-3">
      <h3 className="font-medium">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={selectedValues.includes(option.value)}
              onCheckedChange={(checked) =>
                handleChange(option.value, checked as boolean)
              }
              className="border-2 border-gray-300 bg-transparent checked:bg-green-500 checked:border-green-500 focus:ring-0 transition-all"
            />
            <Label
              htmlFor={option.value}
              className="text-sm cursor-pointer flex-1"
            >
              {option.label}
              {option.count && (
                <span className="text-gray-500 ml-1">({option.count})</span>
              )}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckboxFilter;
