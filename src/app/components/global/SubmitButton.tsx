"use client";

import { useFormStatus } from "react-dom";
import { PrimaryButton } from "./Button";
import Spinner from "./Icons";

export default function SubmitButton({
  text,
  className
}:{
  text: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton disabled={pending} className={className} type="submit">
      {pending ? <Spinner className="animate-spin" /> : text}
    </PrimaryButton>
  );
}
