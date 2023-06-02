-- DropForeignKey
ALTER TABLE `diary` DROP FOREIGN KEY `id_utente`;

-- AddForeignKey
ALTER TABLE `diary` ADD CONSTRAINT `id_utente` FOREIGN KEY (`id_user`) REFERENCES `user`(`id_utenti`) ON DELETE CASCADE ON UPDATE CASCADE;
