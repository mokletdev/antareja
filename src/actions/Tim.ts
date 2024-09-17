"use server";

import { revalidatePath } from "next/cache";
import { updateTim, deleteTim } from "@/queries/tim.query";
import { Tipe } from "@prisma/client"

export async function updateTimForm(id: string, formData: FormData) {
  const link_berkas = formData.get("link_berkas") as string;
  const link_video = formData.get("link_video") as string;

  try {
    await updateTim(
      { id },
      { link_berkas, link_video }
    );
    revalidatePath("/", "layout");
    return { success: true, message: "Berhasil memperbarui Link" };
  } catch (e) {
    console.log(e);
    return { success: false, message: "Gagal memperbarui Link" };
  }
}

export async function updateTimFormAdmin(data: FormData, id: string) {
  const asal_sekolah = data.get("asal_sekolah") as string;
  const tipe_tim = data.get("tipe_tim") as Tipe;

  try {
    await updateTim(
      { id },
      {
        asal_sekolah: asal_sekolah,
        tipe_tim: tipe_tim
      }
    );
    revalidatePath("/", "layout");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}

export async function deleteTimForm(id: string) {
  try {
    await deleteTim({ id });
    revalidatePath("/", "layout");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}
