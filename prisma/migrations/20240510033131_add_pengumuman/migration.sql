-- CreateTable
CREATE TABLE "Pengumuman" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Pengumuman_pkey" PRIMARY KEY ("id")
);
