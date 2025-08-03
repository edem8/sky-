export interface CheckboxFilterProps {
  title: string;
  options: Array<{ value: string; label: string; count?: number }>;
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
}
