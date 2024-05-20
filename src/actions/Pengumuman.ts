"use server";

import { revalidatePath } from "next/cache";
import { createPengumuman, deletePengumuman } from "@/queries/pengumuman.query";

export async function createPengumumanForm(data: FormData) {
  const content = data.get("content") as string;

  try {
    await createPengumuman({
      content: content,
    });
    revalidatePath("/", "layout");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}

export async function deletePengumumanForm(id: string) {
  try {
    await deletePengumuman({ id: id });
    revalidatePath("/", "layout");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}
