"use server";

import { revalidatePath } from "next/cache";
import { deleteTim, updateTim } from "@/queries/tim.query";

export async function updateTimForm(data: FormData, id: string) {
  const asal_sekolah = data.get("asal_sekolah") as string;

  try {
    await updateTim(
      { id },
      {
        asal_sekolah: asal_sekolah,
      }
    );
    revalidatePath("/admin/tim");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}

export async function deleteTimForm(id: string) {
  try {
    await deleteTim({ id });
    revalidatePath("/admin/tim");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}
