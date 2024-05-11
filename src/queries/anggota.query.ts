import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function createAnggota(data: Prisma.AnggotaCreateInput) {
  const createAnggota = await prisma.anggota.create({ data });
  return createAnggota;
}

export async function findAnggotas(where: Prisma.AnggotaWhereInput) {
  const anggotas = await prisma.anggota.findMany({ where });
  return anggotas;
}

export async function findAnggota(where: Prisma.AnggotaWhereUniqueInput) {
  const anggota = await prisma.anggota.findUnique({ where });
  return anggota;
}

export async function updateAnggota(
  where: Prisma.AnggotaWhereUniqueInput,
  data: Prisma.AnggotaUncheckedUpdateInput
) {
  const updatedAnggota = prisma.anggota.update({ where, data });
  return updatedAnggota;
}

export async function deleteAnggota(where: Prisma.AnggotaWhereUniqueInput) {
  const deletedAnggota = await prisma.anggota.delete({ where });
  return deletedAnggota;
}

export async function upsertAnggota(args: Prisma.AnggotaUpsertArgs) {
  const upsertedAnggota = await prisma.anggota.upsert(args);
  return upsertedAnggota;
}
