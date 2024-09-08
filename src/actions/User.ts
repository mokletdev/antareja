"use server";

import { revalidatePath } from "next/cache";
import { generateHash } from "@/lib/hash";
import { createUser, deleteUser, updateUser } from "@/queries/user.query";
import { Role } from "@prisma/client";

export async function createUserForm(data: FormData) {
  const name = data.get("nama") as string;
  const email = data.get("email") as string;
  const password = data.get("password") as string;
  const role = data.get("role") as Role;

  try {
    const hashedPass = generateHash(password);
    await createUser({
      nama: name,
      email: email,
      password: hashedPass,
      role: role,
      token: "tod",
    });
    revalidatePath("/", "layout");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}

export async function updateUserForm(data: FormData, id: string) {
  const name = data.get("nama") as string;
  const email = data.get("email") as string;
  const password = (data.get("password") as string) || undefined;
  const role = data.get("role") as Role;
  const verified = data.get("verified") === "true";

  try {
    if (password) {
      const hashedPass = generateHash(password);
      await updateUser(
        { id: id },
        {
          nama: name,
          email: email,
          password: hashedPass,
          role: role,
        }
      );
      revalidatePath("/", "layout");
      return { success: true };
    }
    await updateUser(
      { id: id },
      {
        nama: name,
        email: email,
        role: role,
        verified : verified,
      }
    );
    revalidatePath("/", "layout");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}

export async function deleteUserForm(id: string) {
  try {
    await deleteUser({ id: id });
    revalidatePath("/", "layout");
    return { success: true };
  } catch (e) {
    console.log(e);
    return { success: false };
  }
}
