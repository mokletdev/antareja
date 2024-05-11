/*
  Warnings:

  - A unique constraint covering the columns `[posisi,timId]` on the table `Anggota` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Anggota_posisi_timId_idx";

-- CreateIndex
CREATE UNIQUE INDEX "Anggota_posisi_timId_key" ON "Anggota"("posisi", "timId");
