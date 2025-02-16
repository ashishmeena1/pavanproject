/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `Seller` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Seller_id_key" ON "Seller"("id");
