import { getServerSession } from "@/lib/next-auth";
import { signIn } from "next-auth/react";
import { findUser, updateUser } from "@/queries/user.query";
import { redirect } from "next/navigation";
import { H1 } from "@/app/components/global/Text";
import { SecondaryLinkButton } from "@/app/components/global/LinkButton";

export default async function Verification({
  searchParams,
}: {
  searchParams?: { token: string };
}) {
  const token = searchParams?.token;
  const session = await getServerSession();
  if (!session) return redirect("/auth/login");

  const user = await findUser({ id: session.user?.id });
  if (
    user?.token !== token ||
    user?.verified ||
    session.user?.role !== "USER" ||
    !token
  )
    return redirect("/");

  await updateUser({ id: session.user?.id }, { verified: true });

  return (
    <div className="flex justify-center items-center text-center text-wrap flex-col h-screen gap-5 px-6 sm:px-0">
      <H1>Berhasil memverifikasi akun {session.user?.email}!</H1>
      <SecondaryLinkButton href="/">Kembali</SecondaryLinkButton>
    </div>
  );
}
