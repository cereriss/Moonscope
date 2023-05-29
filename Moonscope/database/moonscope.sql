DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id_utenti` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `birth_date` datetime NOT NULL,
  `sign` varchar(45) NOT NULL,
  PRIMARY KEY (`id_utenti`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
