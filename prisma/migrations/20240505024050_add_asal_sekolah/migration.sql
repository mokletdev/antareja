/*
  Warnings:

  - Added the required column `asal_sekolah` to the `Tim` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tim" ADD COLUMN     "asal_sekolah" TEXT NOT NULL;
