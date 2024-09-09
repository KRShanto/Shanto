import { Label } from "@radix-ui/react-label";
import { Textarea } from "../ui/textarea";

export default function TextareaField({
  id,
  label,
  placeholder,
  value,
  onChange,
}: {
  id: string;
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-white">
        {label}
      </Label>
      <Textarea
        id={id}
        placeholder={placeholder}
        className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
