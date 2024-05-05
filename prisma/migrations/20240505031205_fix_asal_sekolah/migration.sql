/*
  Warnings:

  - Made the column `asal_sekolah` on table `Tim` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tim" ALTER COLUMN "asal_sekolah" SET NOT NULL;
