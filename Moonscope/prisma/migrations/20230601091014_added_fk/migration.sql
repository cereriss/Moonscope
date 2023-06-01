/*
  Warnings:

  - Added the required column `day` to the `diary` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `diary` ADD COLUMN `day` DATE NOT NULL;

-- CreateIndex
CREATE INDEX `id_utente_idx` ON `diary`(`id_user`);

-- AddForeignKey
ALTER TABLE `diary` ADD CONSTRAINT `id_utente` FOREIGN KEY (`id_user`) REFERENCES `user`(`id_utenti`) ON DELETE NO ACTION ON UPDATE NO ACTION;
