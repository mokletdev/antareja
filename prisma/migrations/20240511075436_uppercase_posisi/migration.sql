/*
  Warnings:

  - The values [b1s1,b1s2,b1s3,b2s1,b2s2,b2s3,b3s1,b3s2,b3s3,b4s1,b4s2,b4s3,b5s1,b5s2,b5s3] on the enum `Posisi` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Posisi_new" AS ENUM ('OFFICIAL', 'DANTON', 'B1S1', 'B1S2', 'B1S3', 'B2S1', 'B2S2', 'B2S3', 'B3S1', 'B3S2', 'B3S3', 'B4S1', 'B4S2', 'B4S3', 'B5S1', 'B5S2', 'B5S3');
ALTER TABLE "Anggota" ALTER COLUMN "posisi" TYPE "Posisi_new" USING ("posisi"::text::"Posisi_new");
ALTER TYPE "Posisi" RENAME TO "Posisi_old";
ALTER TYPE "Posisi_new" RENAME TO "Posisi";
DROP TYPE "Posisi_old";
COMMIT;
