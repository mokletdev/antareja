import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function createPengumuman(data: Prisma.PengumumanCreateInput) {
  const createdPengumuman = await prisma.pengumuman.create({
    data,
  });
  return createdPengumuman;
}

export async function getPengumumans() {
  const pengumumans = await prisma.pengumuman.findMany({
    orderBy: { createdAt: "desc" },
  });
  return pengumumans;
}

export async function deletePengumuman(where: Prisma.PengumumanWhereUniqueInput) {
  const deletedPengumuman = await prisma.pengumuman.delete({ where });
  return deletedPengumuman;
}
