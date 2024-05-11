import { PrimaryButton } from "@/app/components/global/Button";
import { useFormStatus } from "react-dom";
import Spinner from "./Icons";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton disabled={pending} type="submit">
      {pending ? <Spinner className="animate-spin" /> : "Submit"}
    </PrimaryButton>
  );
}
