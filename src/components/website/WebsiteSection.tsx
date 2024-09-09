import { FormDataType } from "@/types/formData";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default function WebsiteSection({
  formData,
  setFormData,
}: {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}) {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="service-type" className="text-white">
          Service Type
        </Label>
        <Select
          onValueChange={(value) =>
            setFormData({ ...formData, serviceType: value })
          }
          defaultValue={formData.serviceType}
        >
          <SelectTrigger
            id="service-type"
            className="border-gray-500 bg-gray-900 text-white focus:border-blue-400 focus:bg-gray-800"
          >
            <SelectValue placeholder="Select a service type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="portfolio">Portfolio Website</SelectItem>
            <SelectItem value="blog">Blogging Website</SelectItem>
            <SelectItem value="custom">Custom Website</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <TextareaField
        id="features"
        label="Desired Features"
        placeholder="List desired features"
        value={formData.features}
        onChange={(e) => setFormData({ ...formData, features: e.target.value })}
      />
      <InputField
        id="timeline"
        label="Project Timeline"
        type="text"
        placeholder="Enter project timeline"
        value={formData.timeline}
        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
      />
    </div>
  );
}
