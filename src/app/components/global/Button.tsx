import cn from "@/lib/clsx";
import { MouseEventHandler, ReactNode, useState } from "react";

export function PrimaryButton({
  children,
  disabled,
  onClick,
  type,
  className,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
}>) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        "bg-secondary hover:opacity-75 duration-300 transition-all py-3 px-6 text-white rounded-full ",
        className
      )}
    >
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  disabled,
  onClick,
  type,
  className,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
}>) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        "bg-primary-500 drop-shadow-glow hover:bg-opacity-75 duration-300 transition-all py-4 px-[30px] text-white rounded-2xl text-sm ",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TertiaryButton({
  children,
  disabled,
  onClick,
  type,
  className,
}: Readonly<{
  children: ReactNode;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type: "submit" | "reset" | "button" | undefined;
  className?: string;
}>) {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        "bg-primary-300 hover:bg-primary-500 hover:text-white duration-300 transition-all py-4 px-[30px] text-primary-500 rounded-2xl text-sm ",
        className
      )}
    >
      {children}
    </button>
  );
}

export function CopyLinkButton({
  children,
  href,
  className,
}: Readonly<{
  children: ReactNode;
  href: string;
  className?: string;
}>) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={cn(
        "bg-secondary hover:opacity-75 duration-300 transition-all py-3 px-6 text-white rounded-full ",
        className
      )}
    >
      {copied ? "Copied!" : children}
    </button>
  );
}
