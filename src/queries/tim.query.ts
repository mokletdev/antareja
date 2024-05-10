import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function createTim(data: Prisma.TimCreateInput) {
  const createdTim = await prisma.tim.create({ data });
  return createdTim;
}

export async function findTims(where?: Prisma.TimWhereInput) {
  const tims = await prisma.tim.findMany({
    include: { anggotas: true, pembayaran: true },
    where,
  });
  return tims;
}

export async function findTim(
  where: Prisma.TimWhereUniqueInput,
  include?: Prisma.TimInclude
) {
  const tim = await prisma.tim.findUnique({ where, include });
  return tim;
}

export async function updateTim(
  where: Prisma.TimWhereUniqueInput,
  data: Prisma.TimUncheckedUpdateInput
) {
  const updatedTim = prisma.tim.update({ where, data });
  return updatedTim;
}

export async function deleteTim(where: Prisma.TimWhereUniqueInput) {
  const deletedTim = await prisma.tim.delete({ where });
  return deletedTim;
}
