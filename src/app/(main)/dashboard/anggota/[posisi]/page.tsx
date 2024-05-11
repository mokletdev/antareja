import { getServerSession } from "@/lib/next-auth";
import { findAnggota } from "@/queries/anggota.query";
import { findTim } from "@/queries/tim.query";
import { Posisi } from "@prisma/client";
import { redirect } from "next/navigation";

export default async function EditAnggota({
  params,
}: Readonly<{ params: { posisi: string } }>) {
  if (
    Object.keys(Posisi)
      .map((pos) => pos.toUpperCase())
      .indexOf(params.posisi.toUpperCase()) === -1
  )
    return redirect("/dashboard");

  const session = await getServerSession();
  const tim = await findTim({ userId: session?.user?.id });
  const anggota = (await findAnggota({
    posisi_timId: {
      posisi: params.posisi as Posisi,
      timId: tim?.id!,
    },
  })) ?? {
    id: "",
    email: "",
    nama: "",
    foto: "",
    kelas: "VII",
    nisn: "",
    posisi: "b1s1",
    telp: "",
    timId: "",
  };

  return <></>;
}
