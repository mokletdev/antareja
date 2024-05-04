import { Prisma } from "@prisma/client";

export type TimWithRelations = Prisma.TimGetPayload<{
  include: {
    anggotas: true;
    pembayaran: true;
    penilaian: true;
  };
}>;

export type PenilaianWithRelations = Prisma.PenilaianGetPayload<{
  include: { user: true; tim: true };
}>;
