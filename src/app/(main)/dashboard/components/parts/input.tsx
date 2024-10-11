import { HTMLInputTypeAttribute } from "react";

export default function Field({
  type,
  id,
  label,
  required,
  name,
  placeholder,
  value,
  disabled
}: {
  type: HTMLInputTypeAttribute;
  id: string;
  label: string;
  required?: boolean;
  name: string;
  placeholder: string;
  value?: string;
  disabled?: boolean;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-[16px]">
        {label}
      </label>
      <input
        id={id}
        type={type}
        name={name}
        className="bg-[#FAFAFA] border border-[#E4E6EA] rounded-[14px] text-[#000000] py-[18px] px-[20px] text-[16px] focus:bg-[#F1F6F9] transition-all duration-500 placeholder:text-[#C8C8C8]"
        required={required}
        placeholder={placeholder}
        defaultValue={value}
        disabled={disabled}
      />
      {required ? (
        <p className="ms-5 text-[#DC3545] text-sm">
          *Jangan lupa masukin {label} kamu
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
