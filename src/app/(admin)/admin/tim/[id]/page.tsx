import { notFound } from "next/navigation";
import TimForm from "./components/Form";
import { toast } from "sonner";
import { Anggota, Tim } from "@prisma/client";
import { findTim } from "@/queries/tim.query";
import { findAnggotas } from "@/queries/anggota.query";

export default async function TimEdit({ params }: { params: { id: string } }) {
  const trygetAnggota = await findAnggotas({ timId: params.id });

  let anggota: Anggota = {
    id : "",
    nama : "",
    kelas : "X",
    foto : "",
    email : "",
    nisn : "",
    posisi:"DANTON",
    telp : "",
    timId: ""
  };

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

  if (trygetTim && trygetAnggota) {
    tim = trygetTim;
    anggota = trygetAnggota;
    return <TimForm data={tim} edit={true} id={params.id} dataAnggota={anggota} />;
  } else return notFound();

}
