import { findAnggotas } from "@/queries/anggota.query";
import { findTim } from "@/queries/tim.query";
import { Anggota, Tim } from "@prisma/client";
import { notFound } from "next/navigation";
import PembayaranForm from "./components/Form";
import { TimWithPembayaran } from "@/types/entityRelations";

export default async function PembayaranEdit({
  params,
}: {
  params: { id: string };
}) {
  const trygetTim = (await findTim(
    { id: params.id },
    { pembayaran: true }
  )) as TimWithPembayaran;

  if (trygetTim) {
    return <PembayaranForm data={trygetTim} id={params.id} />;
  } else return notFound();
}
