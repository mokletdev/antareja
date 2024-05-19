import { getServerSession } from "@/lib/next-auth";
import { findTim } from "@/queries/tim.query";
import { Tim } from "@prisma/client";
import EditAnggotaForm from "./components/Form";
import { redirect } from "next/navigation";

export default async function Mascot() {
  const session = await getServerSession();
  const tim = (await findTim({ userId: session?.user?.id })) as Tim;

  if (tim.jenjang === "SMA")
    return (
      <div className="my-16">
        <EditAnggotaForm tim={tim} />
      </div>
    );
  else return redirect("/dashboard");
}
