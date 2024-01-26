-- CreateTable
CREATE TABLE "solarComponents" (
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

    CONSTRAINT "solarComponents_pkey" PRIMARY KEY ("id")
);
