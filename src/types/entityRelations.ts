import { Prisma } from "@prisma/client";

export type TimWithRelations = Prisma.TimGetPayload<{
  include: {
    anggotas: true;
    pembayaran: true;
  };
}>;

export type TimWithPembayaran = Prisma.TimGetPayload<{
  include: {
    pembayaran: true;
  };
}>;

export type PenilaianWithRelations = Prisma.PenilaianGetPayload<{
  include: { user: true; tim: true };
}>;

export type AnggotaWithRelations = Prisma.AnggotaGetPayload<{
  include: { Tim: true };
}>;
