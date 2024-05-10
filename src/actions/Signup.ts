"use server";

import { sendEmail } from "@/lib/mailer";
import { verifyEmailTemplate } from "@/utils/emailTemplate";
import { v4 as uuidv4, v1 as uuidv1 } from "uuid";
import { generateHash } from "@/lib/hash";
import { createUser, findUser } from "@/queries/user.query";

export default async function signUp(data: FormData) {
  const email = data.get("email") as string;
  const nama = data.get("nama") as string;
  const password = data.get("password") as string;
  const token = [uuidv1(), uuidv4()].join("-");
  const htmlMailBody = verifyEmailTemplate(
    email,
    process.env.NEXTAUTH_URL + "auth/verify?token=" + token
  );

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
    await sendEmail(email, htmlMailBody);
    return { success: true };
  } catch (e) {
    console.log(e);
    return {
      success: false,
      message: "Gagal mendaftar, coba periksa koneksi jaringan anda!",
    };
  }
}
