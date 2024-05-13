import { findAnggota } from "@/queries/anggota.query";
import { findTim } from "@/queries/tim.query";
import { Anggota, Posisi, Tim } from "@prisma/client";
import { redirect } from "next/navigation";
import DisplayAnggota from "./components/Form";

export default async function EditAnggota({
  params,
}: Readonly<{ params: { posisi: string,id:string} }>) {
  if (Object.keys(Posisi).indexOf(params.posisi.toUpperCase()) === -1)
    return redirect("/dashboard");

  const tim = (await findTim({ id:params.id })) as Tim;  
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
      <DisplayAnggota anggota={anggota} />
    </div>
  );
}
