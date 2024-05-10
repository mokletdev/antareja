-- CreateEnum
CREATE TYPE "Tipe" AS ENUM ('SMALL', 'NORMAL');

-- AlterTable
ALTER TABLE "Tim" ADD COLUMN     "tipe_tim" "Tipe";
