import { FormDataType } from "@/types/formData";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default function ConclusionSection({
  formData,
  setFormData,
}: {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}) {
  return (
    <div className="space-y-4">
      <InputField
        id="budget"
        label="Budget (USD)"
        type="number"
        placeholder="Enter your budget"
        value={formData.budget}
        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
      />

      <TextareaField
        id="additional-info"
        label="Additional Information"
        placeholder="Any additional information"
        value={formData.additionalInfo}
        onChange={(e) =>
          setFormData({ ...formData, additionalInfo: e.target.value })
        }
      />
    </div>
  );
}
