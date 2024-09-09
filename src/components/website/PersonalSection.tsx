import { FormDataType } from "@/types/formData";
import InputField from "./InputField";
import TextareaField from "./TextareaField";

export default function PersonalSection({
  formData,
  setFormData,
}: {
  formData: FormDataType;
  setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <InputField
          id="firstName"
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <InputField
          id="lastName"
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
      </div>
      <InputField
        id="email"
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <InputField
        id="phone"
        label="Phone"
        type="tel"
        placeholder="Enter your phone number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      <TextareaField
        id="address"
        label="Address"
        placeholder="Enter your address"
        value={formData.address}
        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
      />

      <InputField
        id="linkedin"
        label="LinkedIn URL"
        type="url"
        placeholder="Enter your LinkedIn profile URL"
        value={formData.linkedin}
        onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
      />
      <InputField
        id="portfolio"
        label="Portfolio URL (if applicable)"
        type="url"
        placeholder="Enter your portfolio website URL"
        value={formData.portfolio}
        onChange={(e) =>
          setFormData({ ...formData, portfolio: e.target.value })
        }
      />
    </div>
  );
}
