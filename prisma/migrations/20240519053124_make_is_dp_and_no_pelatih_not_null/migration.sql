/*
  Warnings:

  - Made the column `isDP` on table `Pembayaran` required. This step will fail if there are existing NULL values in that column.
  - Made the column `no_pelatih` on table `Tim` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Pembayaran" ALTER COLUMN "isDP" SET NOT NULL;

-- AlterTable
ALTER TABLE "Tim" ALTER COLUMN "no_pelatih" SET NOT NULL;
