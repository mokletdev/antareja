/*
  Warnings:

  - You are about to drop the column `status` on the `Tim` table. All the data in the column will be lost.

*/
-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Posisi" ADD VALUE 'b1s1';
ALTER TYPE "Posisi" ADD VALUE 'b1s2';
ALTER TYPE "Posisi" ADD VALUE 'b1s3';
ALTER TYPE "Posisi" ADD VALUE 'b2s1';
ALTER TYPE "Posisi" ADD VALUE 'b2s2';
ALTER TYPE "Posisi" ADD VALUE 'b2s3';
ALTER TYPE "Posisi" ADD VALUE 'b3s1';
ALTER TYPE "Posisi" ADD VALUE 'b3s2';
ALTER TYPE "Posisi" ADD VALUE 'b3s3';
ALTER TYPE "Posisi" ADD VALUE 'b4s1';
ALTER TYPE "Posisi" ADD VALUE 'b4s2';
ALTER TYPE "Posisi" ADD VALUE 'b4s3';
ALTER TYPE "Posisi" ADD VALUE 'b5s1';
ALTER TYPE "Posisi" ADD VALUE 'b5s2';
ALTER TYPE "Posisi" ADD VALUE 'b5s3';

-- AlterTable
ALTER TABLE "Tim" DROP COLUMN "status",
ADD COLUMN     "confirmed" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "StatusPembayaran";
