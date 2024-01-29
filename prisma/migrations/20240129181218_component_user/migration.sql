/*
  Warnings:

  - You are about to drop the `solarComponents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "solarComponents";

-- CreateTable
CREATE TABLE "SolarComponent" (
    "id" UUID NOT NULL,
    "gtin" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "segmentType" TEXT NOT NULL,
    "group" TEXT NOT NULL,
    "height" INTEGER NOT NULL,
    "width" INTEGER NOT NULL,
    "depth" INTEGER NOT NULL,
    "grossWeight" INTEGER NOT NULL,
    "netWeight" INTEGER NOT NULL,

    CONSTRAINT "SolarComponent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
