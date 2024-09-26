"use server";

import { getServerSession } from "@/lib/next-auth";
import {
  createAnggota,
  findAnggota,
  updateAnggota,
} from "@/queries/anggota.query";
import { findTim } from "@/queries/tim.query";
import { Kelas, Posisi, Tim } from "@prisma/client";
import { imageUploader } from "./fileUploader";
import { revalidatePath } from "next/cache";

export async function upsertAnggotaForm(
  data: FormData,
  posisi: Posisi,
  id: string
) {
  const session = await getServerSession();

  const nama = data.get("nama") as string;
  const email = data.get("email") as string;
  const telp = data.get("telp") as string;
  const nisn = data.get("nisn") as string | undefined;
  const foto = data.get("foto") as File;
  const kelas = data.get("kelas") as Kelas;

  if (foto.size / 1024 / 1024 > 10)
    return { success: false, message: "Max. Ukuran foto adalah 10MB" };

  const tim = (await findTim({ userId: session?.user?.id })) as Tim;
  const tryFindAnggota = await findAnggota({ id });

  try {
    let fotoUrl: string | undefined;
    if (foto.name !== "undefined") {
      const fotoBuffer = await foto.arrayBuffer();
      const uploadedFoto = await imageUploader(Buffer.from(fotoBuffer));
      fotoUrl = uploadedFoto?.data?.url;
    }

    const anggotaData = {
      nama,
      email,
      telp,
      nisn,
      kelas,
      posisi,
    };

    const anggotaUpdate = { ...anggotaData, foto: fotoUrl ?? undefined };
    const anggotaCreate = {
      ...anggotaData,
      foto: fotoUrl!,
      Tim: { connect: { id: tim.id } },
    };

    if (tryFindAnggota) await updateAnggota({ id }, anggotaUpdate);
    else await createAnggota(anggotaCreate);
    revalidatePath("/", "layout");
    return { success: true, message: "Berhasil memperbarui anggota!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal memperbarui anggota" };
  }
}
