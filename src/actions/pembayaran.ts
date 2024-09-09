"use server";

import { updatePembayaran } from "@/queries/pembayaran.query";
import { updateTim } from "@/queries/tim.query";
import { revalidatePath } from "next/cache";

export default async function konfirmasiPembayaran(
  data: FormData,
  idTim: string
) {
  const status = data.get("confirm") === "true";
  const statusPembayaran = data.get("isDP") === "true";

  try {
    await updateTim({ id: idTim }, { confirmed: status });
    await updatePembayaran({ tim_id: idTim }, { isDP: statusPembayaran });
    revalidatePath("/", "layout");
    return { success: true, message: "Berhasil mengupdate status pembayaran!" };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Gagal mengupdate status pembayaran",
    };
  }
}
