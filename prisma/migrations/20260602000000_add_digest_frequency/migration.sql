-- CreateEnum
CREATE TYPE "DigestFrequency" AS ENUM ('SMART', 'DAILY', 'WEEKLY');

-- AlterTable
ALTER TABLE "User" ADD COLUMN "digestFrequency" "DigestFrequency" NOT NULL DEFAULT 'SMART';
