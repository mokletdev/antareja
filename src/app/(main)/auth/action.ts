"use server";
import { signIn } from "next-auth/react";

export async function logIn(data: FormData) {
  const password = data.get("password");
  const email = data.get("email");

  await signIn("credentials", {
    email: email,
    password: password,
    redirect: true,
  });
}
