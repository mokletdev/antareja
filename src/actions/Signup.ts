"use server";

import { generateHash } from "@/lib/hash";
import { mailMetaData, sendMailTo } from "@/lib/mailer";
import { createUser, findUser } from "@/queries/user.query";
import { verifyEmailTemplate } from "@/utils/emailTemplate";
import { revalidatePath } from "next/cache";
import { v1 as uuidv1, v4 as uuidv4 } from "uuid";

export default async function signUp(data: FormData) {
  const email = data.get("email") as string;
  const nama = data.get("nama") as string;
  const password = data.get("password") as string;
  const token = [uuidv1(), uuidv4()].join("-");
  const tryFindUser = await findUser({ email });
  if (tryFindUser) return { success: false, message: "User telah terdaftar!" };

  try {
    const hashedPass = generateHash(password);
    await createUser({
      email,
      nama,
      password: hashedPass,
      role: "USER",
      token,
    });
    const htmlMail = verifyEmailTemplate(
      nama,
      `${process.env.NEXTAUTH_URL}auth/verify?token=${token}`
    );

    const mailMetaData: mailMetaData = {
      subject: "Verifikasi akun LKBB Antareja",
      to: email,
      html: htmlMail,
    };

    await sendMailTo(mailMetaData);
    revalidatePath("/", "layout");
    return { success: true };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Gagal mendaftar, coba periksa koneksi jaringan anda!",
    };
  }
}
