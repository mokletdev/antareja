/*
  Warnings:

  - You are about to drop the column `penilaian_id` on the `Tim` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[tim_id]` on the table `Penilaian` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tim_id` to the `Penilaian` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Anggota" DROP CONSTRAINT "Anggota_timId_fkey";

-- DropForeignKey
ALTER TABLE "Tim" DROP CONSTRAINT "Tim_penilaian_id_fkey";

-- DropIndex
DROP INDEX "Tim_penilaian_id_key";

-- AlterTable
ALTER TABLE "Penilaian" ADD COLUMN     "tim_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tim" DROP COLUMN "penilaian_id";

-- CreateIndex
CREATE UNIQUE INDEX "Penilaian_tim_id_key" ON "Penilaian"("tim_id");

-- AddForeignKey
ALTER TABLE "Anggota" ADD CONSTRAINT "Anggota_timId_fkey" FOREIGN KEY ("timId") REFERENCES "Tim"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_tim_id_fkey" FOREIGN KEY ("tim_id") REFERENCES "Tim"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
