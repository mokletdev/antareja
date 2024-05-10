/*
  Warnings:

  - Made the column `tipe_tim` on table `Tim` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Tim" ALTER COLUMN "tipe_tim" SET NOT NULL;
