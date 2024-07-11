import { getServerSession } from "@/lib/next-auth";
import { findTim } from "@/queries/tim.query";
import { redirect } from "next/navigation";
import Heading from "./components/Heading";
import ProfileTim from "./components/ProfileTim";
import { TimWithRelations } from "@/types/entityRelations";
import { H3 } from "@/app/components/global/Text";
import SectionWrapper from "@/app/components/global/Wrapper";

export default async function TimDashboard() {
  const session = await getServerSession();

  if (!session) return redirect("/auth/login");

  const timByUser = (await findTim(
    { userId: session.user?.id },
    { anggotas: true, pembayaran: true, penilaian: true, user: true }
  )) as TimWithRelations;
  if (!timByUser) return redirect("/form");

  return (
    <>
      <Heading />
      <ProfileTim tim={timByUser} />
    </>
  );
}
