/*
  Warnings:

  - Added the required column `userId` to the `Tour` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tour" ADD COLUMN     "userId" TEXT NOT NULL;
