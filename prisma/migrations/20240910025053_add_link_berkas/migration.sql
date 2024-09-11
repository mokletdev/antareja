-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Posisi" ADD VALUE 'CERDAS_CERMAT1';
ALTER TYPE "Posisi" ADD VALUE 'CERDAS_CERMAT2';

-- AlterTable
ALTER TABLE "Tim" ADD COLUMN     "link_berkas" TEXT;
