import { findAnggota, findAnggotas } from "@/queries/anggota.query";
import { findTim } from "@/queries/tim.query";
import { Anggota, Tim } from "@prisma/client";
import { notFound } from "next/navigation";
import TimForm from "./components/Form";

export default async function TimEdit({ params }: { params: { id: string } }) {
  const trygetAnggotas = await findAnggotas({ timId: params.id });

  let anggotas: Anggota[] = [];

  let tim: Tim = {
    id: "",
    nama_tim: "",
    asal_sekolah: "",
    pelatih: "",
    jenjang: "SMA",
    confirmed: false,
    userId: "",
    updated_at: new Date(),
  };

  const trygetTim = await findTim({ id: params.id });

  if (trygetTim && trygetAnggotas) {
    tim = trygetTim;
    anggotas = trygetAnggotas;
    return (
      <TimForm data={tim} edit={true} id={params.id} dataAnggota={anggotas} />
    );
  } else return notFound();
}
