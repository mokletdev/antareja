import { getServerSession } from "@/lib/next-auth";
import { findTim } from "@/queries/tim.query";
import { redirect } from "next/navigation";
import FormComponent from "./components/Form";

export default async function Form() {
  const session = await getServerSession();
  if (!session) return redirect("/auth/login");

  const timByUser = await findTim({ userId: session.user?.id });
  if (timByUser) return redirect("/dashboard");

  return (
    <div className="h-screen">
      <FormComponent />
    </div>
  );
}
