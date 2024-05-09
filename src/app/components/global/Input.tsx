import { ChangeEventHandler, HTMLInputTypeAttribute, LegacyRef } from "react";
import cn from "@/lib/clsx";
import { ClassNameValue } from "tailwind-merge";

export default function TextField({
  type,
  id,
  label,
  required,
  name,
  placeholder,
  value,
  className,
  onChange,
  botText,
}: Readonly<{
  type: HTMLInputTypeAttribute;
  id: string;
  label?: string;
  required?: boolean;
  name: string;
  placeholder: string;
  value?: string | number;
  className?: ClassNameValue;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  botText?: boolean;
}>) {
  return (
    <div className="flex flex-col gap-2">
      {label ? (
        <label htmlFor={id} className="text-[16px]">
          {label}
        </label>
      ) : (
        ""
      )}
      <input
        onChange={onChange}
        id={id}
        type={type}
        name={name}
        className={cn(
          "bg-[#FAFAFA] border border-[#E4E6EA] rounded-[14px] text-[#000000] py-[18px] px-[20px] text-[16px] focus:bg-[#F1F6F9] transition-all duration-500 placeholder:text-[#C8C8C8]",
          className
        )}
        required={required}
        placeholder={placeholder}
        defaultValue={value}
      />
      {botText ? (
        <p className="ms-5 text-[#DC3545] text-sm">
          *Jangan lupa masukin {id} kamu
        </p>
      ) : (
        ""
      )}
    </div>
  );
}
