-- CreateTable
CREATE TABLE "Products" (
    "id" TEXT NOT NULL,
    "productthumbnail" TEXT NOT NULL,
    "producttitle" TEXT NOT NULL,
    "productcost" INTEGER NOT NULL,
    "productdescription" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Products_pkey" PRIMARY KEY ("id")
);
