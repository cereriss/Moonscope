-- CreateTable
CREATE TABLE `diary` (
    `id_diary` INTEGER NOT NULL AUTO_INCREMENT,
    `id_user` INTEGER NOT NULL,
    `content` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_diary`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id_utenti` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `birth_date` DATETIME(0) NOT NULL,
    `sign` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id_utenti`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
