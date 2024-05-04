/*
  Warnings:

  - The values [JURI] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `danpas` to the `Penilaian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `detail_url` to the `Penilaian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `formasi` to the `Penilaian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `note` to the `Penilaian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pasukan` to the `Penilaian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pbb` to the `Penilaian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pbb_tambahan` to the `Penilaian` table without a default value. This is not possible if the table is not empty.
  - Added the required column `variasi` to the `Penilaian` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('USER', 'ADMIN');
ALTER TABLE "User" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "Role_old";
COMMIT;

-- AlterTable
ALTER TABLE "Penilaian" ADD COLUMN     "danpas" INTEGER NOT NULL,
ADD COLUMN     "detail_url" TEXT NOT NULL,
ADD COLUMN     "formasi" INTEGER NOT NULL,
ADD COLUMN     "note" TEXT NOT NULL,
ADD COLUMN     "pasukan" INTEGER NOT NULL,
ADD COLUMN     "pbb" INTEGER NOT NULL,
ADD COLUMN     "pbb_tambahan" INTEGER NOT NULL,
ADD COLUMN     "published" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "variasi" INTEGER NOT NULL;
