import { Prisma } from "@prisma/client";

export type TimWithAnggotas = Prisma.TimGetPayload<{
  include: {
    anggotas: true;
  };
}>;
