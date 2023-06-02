/*
  Warnings:

  - A unique constraint covering the columns `[username]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `username_UNIQUE` ON `user`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `email_UNIQUE` ON `user`(`email`);
