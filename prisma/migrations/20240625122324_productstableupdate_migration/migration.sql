/*
  Warnings:

  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Products";

-- CreateTable
CREATE TABLE "products_table" (
    "id" TEXT NOT NULL,
    "productthumbnail" TEXT NOT NULL,
    "producttitle" TEXT NOT NULL,
    "productcost" INTEGER NOT NULL,
    "productdescription" TEXT NOT NULL,
    "onoffer" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("id")
);
