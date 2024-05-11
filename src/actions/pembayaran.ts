"use server";

import { updateTim } from "@/queries/tim.query";
import { revalidatePath } from "next/cache";

export default async function konfirmasiPembayaran(
  data: FormData,
  idTim: string
) {
  const status = Boolean(data.get("confirm") as string);

  console.log(status);
  try {
    await updateTim({ id: idTim }, { confirmed: status });
    revalidatePath("/admin/pembayaran");
    return { success: true, message: "Berhasil mengupdate status pembayaran!" };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Gagal mengupdate status pembayaran",
    };
  }
}
