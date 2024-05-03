/*
  Warnings:

  - Made the column `timId` on table `Anggota` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Anggota" DROP CONSTRAINT "Anggota_timId_fkey";

-- AlterTable
ALTER TABLE "Anggota" ALTER COLUMN "timId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Anggota" ADD CONSTRAINT "Anggota_timId_fkey" FOREIGN KEY ("timId") REFERENCES "Tim"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
