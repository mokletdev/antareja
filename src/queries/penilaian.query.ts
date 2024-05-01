import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function findPenilaians(where: Prisma.PenilaianWhereInput) {
  const penilaians = await prisma.penilaian.findMany({ where });
  return penilaians;
}

export async function findPenilaian(where: Prisma.PenilaianWhereUniqueInput) {
  const penilaian = await prisma.penilaian.findUnique({ where });
  return penilaian;
}

export async function updatePenilaian(
  where: Prisma.PenilaianWhereUniqueInput,
  data: Prisma.PenilaianUncheckedUpdateInput
) {
  const updatedPenilaian = prisma.penilaian.update({ where, data });
  return updatedPenilaian;
}

export async function deletePenilaian(where: Prisma.PenilaianWhereUniqueInput) {
  const deletedPenilaian = await prisma.penilaian.delete({ where });
  return deletedPenilaian;
}
