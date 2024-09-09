import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

export default function InputField({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-white">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
