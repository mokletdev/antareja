-- AlterTable
ALTER TABLE "Pembayaran" ADD COLUMN     "isDP" BOOLEAN;

-- AlterTable
ALTER TABLE "Penilaian" ADD COLUMN     "cerdas_cermat" INTEGER,
ADD COLUMN     "mascot" INTEGER;

-- AlterTable
ALTER TABLE "Tim" ADD COLUMN     "no_pelatih" TEXT;
