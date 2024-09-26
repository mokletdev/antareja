"use server";

import { updateTim } from "@/queries/tim.query";
import { imageUploader } from "./fileUploader";
import { revalidatePath } from "next/cache";

export async function upsertFotoMascotForm(data: FormData, id: string) {
  const fotoMascot = data.get("fotomascot") as File;

  if (fotoMascot.size / 1024 / 1024 > 10)
    return { success: false, message: "Max. Ukuran foto adalah 10MB" };

  try {
    let fotoMascotUrl: string | undefined;
    if (fotoMascot.name !== "undefined") {
      const fotoMascotBuffer = await fotoMascot.arrayBuffer();
      const uploadedFotoMascot = await imageUploader(
        Buffer.from(fotoMascotBuffer)
      );
      fotoMascotUrl = uploadedFotoMascot?.data?.url;
    }

    await updateTim({ id }, { foto_mascot: fotoMascotUrl });
    revalidatePath("/", "layout");
    return { success: true, message: "Berhasil memperbarui foto mascot!" };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Gagal memperbarui foto mascot" };
  }
}
