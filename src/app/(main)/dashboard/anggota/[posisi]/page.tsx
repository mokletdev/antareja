import { getServerSession } from "@/lib/next-auth";
import { findAnggota } from "@/queries/anggota.query";
import { findTim } from "@/queries/tim.query";
import { Anggota, Posisi, Tim } from "@prisma/client";
import { redirect } from "next/navigation";
import EditAnggotaForm from "./components/Form";

export default async function EditAnggota({
  params,
}: Readonly<{ params: { posisi: string } }>) {
  if (Object.keys(Posisi).indexOf(params.posisi.toUpperCase()) === -1)
    return redirect("/dashboard");

  const session = await getServerSession();
  const tim = (await findTim({ userId: session?.user?.id })) as Tim;
  const anggota =
    (await findAnggota({
      posisi_timId: {
        posisi: params.posisi.toUpperCase() as Posisi,
        timId: tim?.id,
      },
    })) ??
    ({
      id: "",
      email: "",
      nama: "",
      foto: "",
      kelas: "VII",
      nisn: "",
      posisi: params.posisi.toUpperCase(),
      telp: "",
      timId: "",
    } as unknown as Anggota);

  return (
    <div className="my-16">
      <EditAnggotaForm anggota={anggota} />
    </div>
  );
}
