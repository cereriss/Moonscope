DROP TABLE IF EXISTS `diary`;
CREATE TABLE `diary` (
  `id_diary` int NOT NULL AUTO_INCREMENT,
  `content` varchar(500) NOT NULL,
  `id_user` int NOT NULL,
  PRIMARY KEY (`id_diary`),
  KEY `id_user_idx` (`id_user`),
  CONSTRAINT `id_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_utenti`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

