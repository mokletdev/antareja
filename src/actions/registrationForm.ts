"use server";
import { imageUploader } from "./fileUploader";
import { createTim } from "@/queries/tim.query";
import { Jenjang } from "@prisma/client";
import { Tipe } from "@prisma/client";

export default async function submitFormRegistrasi(
  data: FormData,
  userId: string
) {
  const nama_tim = data.get("namatim") as string;
  const pelatih = data.get("pelatih") as string;
  const asal_sekolah = data.get("asal") as string;
  const jenjang = data.get("jenjang") as Jenjang;
  const tipe_tim = data.get("size") as Tipe;
  const bukti = data.get("bukti") as File;
  const bank = data.get("namabank") as string;
  const nama_rek = data.get("namarek") as string;

  try {
    const tryUploadImage = await imageUploader(
      Buffer.from(await bukti.arrayBuffer())
    );
    await createTim({
      nama_tim,
      asal_sekolah,
      jenjang,
      pelatih,
      tipe_tim,
      user: { connect: { id: userId } },
      pembayaran: {
        create: { bank, bukti_tf: tryUploadImage.data?.url!, nama_rek },
      },
    });
    return { success: true, message: "Berhasil membuat Tim!" };
  } catch (e) {
    console.log(e);
    return { success: false, message: "Gagal membuat Tim" };
  }
}
