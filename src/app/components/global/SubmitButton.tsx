"use client";

import cn from "@/lib/clsx";
import { useFormStatus } from "react-dom";
import { PrimaryButton } from "./Button";
import Spinner from "./Icons";

export default function SubmitButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton
      disabled={pending}
      className={cn("relative ", className)}
      type="submit"
    >
      {pending ? (
        <div className="flex items-center justify-center">
          <Spinner className="animate-spin" />
        </div>
      ) : (
        text
      )}
    </PrimaryButton>
  );
}

export function LoginButton({
  text,
  className,
  disabled,
}: {
  text: string;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <PrimaryButton
      disabled={disabled}
      className={cn("relative px-6 py-3 ", className)}
      type="submit"
    >
      {disabled ? (
        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
          <Spinner className="animate-spin" />
        </div>
      ) : (
        text
      )}
    </PrimaryButton>
  );
}
