/*
  Warnings:

  - You are about to drop the column `user_id` on the `Pembayaran` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Tim` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Tim` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Pembayaran" DROP CONSTRAINT "Pembayaran_user_id_fkey";

-- DropIndex
DROP INDEX "Pembayaran_user_id_key";

-- AlterTable
ALTER TABLE "Pembayaran" DROP COLUMN "user_id";

-- AlterTable
ALTER TABLE "Tim" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Tim_userId_key" ON "Tim"("userId");

-- AddForeignKey
ALTER TABLE "Tim" ADD CONSTRAINT "Tim_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
