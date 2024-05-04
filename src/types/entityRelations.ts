import { Prisma } from "@prisma/client";

export type TimWithRelations = Prisma.TimGetPayload<{
  include: {
    anggotas: true;
    pembayaran: true;
    penilaian: true;
  };
}>;
