import { FormDataType } from "@/types/formData";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default function BusinessSection({
  formData,
  setFormData,
}: {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}) {
  return (
    <div className="space-y-4">
      <InputField
        id="company"
        label="Company Name"
        type="text"
        placeholder="Enter your company name"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
      />
      <InputField
        id="industry"
        label="Industry"
        type="text"
        placeholder="Enter your industry"
        value={formData.industry}
        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
      />
      <TextareaField
        id="description"
        label="Description"
        placeholder="Tell me about your business"
        value={formData.description}
        onChange={(e) =>
          setFormData({ ...formData, description: e.target.value })
        }
      />
    </div>
  );
}
