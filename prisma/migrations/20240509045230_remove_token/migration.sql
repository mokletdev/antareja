/*
  Warnings:

  - You are about to drop the column `token` on the `AuthToken` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "AuthToken_token_key";

-- AlterTable
ALTER TABLE "AuthToken" DROP COLUMN "token";
