import prisma from "@/lib/prisma";
import { FaPeopleLine, FaPerson } from "react-icons/fa6";
import { H1, H4, P } from "@/app/components/global/Text";

async function getCounts() {
  const usersCount = await prisma.user.count();
  const timsCount = await prisma.tim.count();
  const anggotasCount = await prisma.anggota.count();

  return { usersCount, timsCount, anggotasCount };
}

export default async function Admin() {
  const { usersCount, timsCount, anggotasCount } = await getCounts();

  return (
    <div className="block">
      <H1 className="mb-2">Main Dashboard</H1>
      <div className="flex items-center gap-10 flex-col sm:flex-row">
        <figure className="flex items-center bg-white rounded-lg px-6 py-3 gap-4 w-full sm:w-auto">
          <FaPerson className="w-10 h-10" />
          <div>
            <H4>User</H4>
            <P>{usersCount}</P>
          </div>
        </figure>
        <figure className="flex items-center bg-white rounded-lg px-6 py-3 gap-4 w-full sm:w-auto">
          <FaPeopleLine className="w-10 h-10" />
          <div>
            <H4>Tim</H4>
            <P>{timsCount}</P>
          </div>
        </figure>
        <figure className="flex items-center bg-white rounded-lg px-6 py-3 gap-4 w-full sm:w-auto">
          <FaPerson className="w-10 h-10" />
          <div>
            <H4>Anggota</H4>
            <P>{anggotasCount}</P>
          </div>
        </figure>
      </div>
    </div>
  );
}
