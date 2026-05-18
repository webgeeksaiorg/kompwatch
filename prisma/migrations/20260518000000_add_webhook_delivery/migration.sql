-- CreateEnum
CREATE TYPE "WebhookEventType" AS ENUM ('DIGEST', 'INSTANT_ALERT', 'TEST');

-- CreateTable
CREATE TABLE "WebhookDelivery" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eventType" "WebhookEventType" NOT NULL,
    "platform" TEXT NOT NULL,
    "webhookUrl" TEXT NOT NULL,
    "success" BOOLEAN NOT NULL,
    "httpStatus" INTEGER,
    "errorMessage" TEXT,
    "retryCount" INTEGER NOT NULL DEFAULT 0,
    "changeId" TEXT,
    "digestId" TEXT,

    CONSTRAINT "WebhookDelivery_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "WebhookDelivery_userId_createdAt_idx" ON "WebhookDelivery"("userId", "createdAt");

-- AddForeignKey
ALTER TABLE "WebhookDelivery" ADD CONSTRAINT "WebhookDelivery_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
