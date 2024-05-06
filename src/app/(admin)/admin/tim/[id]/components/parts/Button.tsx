import { useFormStatus } from "react-dom";
import Spinner from "./Icons";
import { PrimaryButton } from "@/app/(admin)/admin/components/global/Button";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton disabled={pending} type="submit">
      {pending ? <Spinner className="animate-spin" /> : "Submit"}
    </PrimaryButton>
  );
}
