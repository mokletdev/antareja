import { findAnggotas } from "@/queries/anggota.query";
import { findTim } from "@/queries/tim.query";
import { Anggota, Tim } from "@prisma/client";
import { notFound } from "next/navigation";
import TimForm from "./components/Form";
import ProfileTim from "./components/ProfileTim";
import { TimWithRelations } from "@/types/entityRelations";

export default async function TimEdit({ params }: { params: { id: string } }) {
  const trygetAnggotas = await findAnggotas({ timId: params.id });

  let anggotas: Anggota[] = [];

  const timByUser = (await findTim(
    { id: params.id },
    { anggotas: true, pembayaran: true, penilaian: true, user: true }
  )) as TimWithRelations;

  let tim: Tim = {
    id: "",
    nama_tim: "",
    asal_sekolah: "",
    pelatih: "",
    no_pelatih: "",
    jenjang: "SMA",
    confirmed: false,
    userId: "",
    updated_at: new Date(),
    tipe_tim: "NORMAL",
    foto_mascot: "",
    link_berkas: "",
    link_video: "",
  };

  const trygetTim = await findTim({ id: params.id });

  if (trygetTim && trygetAnggotas) {
    tim = trygetTim;
    anggotas = trygetAnggotas;
    return (
      <>
        <TimForm data={tim} edit={true} id={params.id} dataAnggota={anggotas} />
        <ProfileTim tim={timByUser} />
      </>
    );
  } else return notFound();
}
