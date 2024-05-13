import { getServerSession } from "@/lib/next-auth";
import { findAnggota } from "@/queries/anggota.query";
import { findTim } from "@/queries/tim.query";
import { Tim } from "@prisma/client";
import EditAnggotaForm from "./components/Form";

export default async function EditAnggota() {
  const session = await getServerSession();
  const tim = (await findTim({ userId: session?.user?.id })) as Tim;

  return (
    <div className="my-16">
      <EditAnggotaForm tim={tim} />
    </div>
  );
}
