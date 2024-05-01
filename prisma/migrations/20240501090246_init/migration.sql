-- CreateEnum
CREATE TYPE "Jenjang" AS ENUM ('SMP', 'SMA');

-- CreateEnum
CREATE TYPE "Kelas" AS ENUM ('VII', 'VIII', 'IX', 'X', 'XI', 'XII');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'JURI', 'ADMIN');

-- CreateEnum
CREATE TYPE "StatusPembayaran" AS ENUM ('PROSES', 'TERBAYARKAN', 'GAGAL');

-- CreateEnum
CREATE TYPE "Posisi" AS ENUM ('OFFICIAL', 'DANTON');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Anggota" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telp" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "posisi" "Posisi" NOT NULL,
    "nisn" TEXT,
    "kelas" "Kelas" NOT NULL,
    "timId" TEXT,

    CONSTRAINT "Anggota_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Penilaian" (
    "id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "Penilaian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tim" (
    "id" TEXT NOT NULL,
    "nama_tim" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "penilaian_id" TEXT NOT NULL,
    "pelatih" TEXT NOT NULL,
    "jenjang" "Jenjang" NOT NULL,
    "status" "StatusPembayaran" NOT NULL,

    CONSTRAINT "Tim_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pembayaran" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "tim_id" TEXT NOT NULL,
    "bukti_tf" TEXT NOT NULL,
    "bank" TEXT NOT NULL,
    "nama_rek" TEXT NOT NULL,

    CONSTRAINT "Pembayaran_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Anggota_email_key" ON "Anggota"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Penilaian_user_id_key" ON "Penilaian"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Tim_penilaian_id_key" ON "Tim"("penilaian_id");

-- CreateIndex
CREATE UNIQUE INDEX "Pembayaran_user_id_key" ON "Pembayaran"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Pembayaran_tim_id_key" ON "Pembayaran"("tim_id");

-- AddForeignKey
ALTER TABLE "Anggota" ADD CONSTRAINT "Anggota_timId_fkey" FOREIGN KEY ("timId") REFERENCES "Tim"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Penilaian" ADD CONSTRAINT "Penilaian_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tim" ADD CONSTRAINT "Tim_penilaian_id_fkey" FOREIGN KEY ("penilaian_id") REFERENCES "Penilaian"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pembayaran" ADD CONSTRAINT "Pembayaran_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pembayaran" ADD CONSTRAINT "Pembayaran_tim_id_fkey" FOREIGN KEY ("tim_id") REFERENCES "Tim"("id") ON DELETE CASCADE ON UPDATE CASCADE;
