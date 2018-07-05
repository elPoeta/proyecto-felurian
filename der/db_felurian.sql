DROP DATABASE IF EXISTS `db_felurian`;
CREATE DATABASE `db_felurian`;
USE `db_felurian`;


DROP TABLE IF EXISTS `categoria`;
DROP TABLE IF EXISTS `sub_categoria`;
DROP TABLE IF EXISTS `variedad`;
DROP TABLE IF EXISTS `bodega`;
DROP TABLE IF EXISTS `producto`;
DROP TABLE IF EXISTS `promocion`;
DROP TABLE IF EXISTS `cliente`;
DROP TABLE IF EXISTS `domicilio`;
DROP TABLE IF EXISTS `orden_cliente`;
DROP TABLE IF EXISTS `orden_cliente_producto`;
DROP TABLE IF EXISTS `role`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `user_role`;


CREATE TABLE  `categoria`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `nombre` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `categoria` (`nombre`) VALUES ('Vinos'), ('Delicatessen'),('Accesorios');

CREATE TABLE  `sub_categoria`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `nombre` VARCHAR(60) NOT NULL,
    `categoria_id` INT,
	PRIMARY KEY (`id`),
    FOREIGN KEY (`categoria_id`) REFERENCES `categoria`(`id`)
);

INSERT INTO `sub_categoria` (`nombre`,`categoria_id`) VALUES ('Tintos',1), ('Blancos',1),
('Rosados',1),('Dulces',1),('Blend',1),('Estuches',1),('Aceites',2),('Dulces',2),('Salados',2),
('Cristaleria',3),('Cavas',3),('Otros',3);

CREATE TABLE  `variedad`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `nombre` VARCHAR(60) NOT NULL,
    PRIMARY KEY (`id`)
);


INSERT INTO `variedad` (`nombre`) VALUES ('Malbec'),('Cabernet Sauvignon'),('Pinot Noir'),
('Merlot'),('Syrah'),('Torrontés'),('Bonarda'),('Tempranillo'),('Tannat'),('Chardonnay'),
('Cabernet Franc'),('Semillón'),('Tardío'),('Sauvignon Blanc');

CREATE TABLE `bodega`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
);

INSERT INTO `bodega` (`nombre`) VALUES ('Alamos'),('Altos Las Hormigas'),('Benegas'),
('Callia'),('Catena Zapata'),('El Esteco'),('Estancia Mendoza'),('Familia Zuccardi'),
('Finca Las Moras'),('Finca Quara'),('Lopez'),('Luigi Bosca'),('Nieto Senetiner'),
('Navarro Correas'),('Las Perdices'),('Latitud 33'),('San Huberto'),('Trapiche');

CREATE TABLE `producto` (
    `id` INT AUTO_INCREMENT NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `precio` DECIMAL(6,2) NOT NULL,
    `descripcion` TEXT,
    `stock` int NOT NULL,
    `imagen` VARCHAR(255) NOT NULL,
    `is_disponible` BOOLEAN NOT NULL,
    `sub_categoria_id` INT NOT NULL,
    `bodega_id` INT NOT NULL,
    `variedad_id` INT ,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`sub_categoria_id`) REFERENCES `sub_categoria`(`id`),
    FOREIGN KEY (`bodega_id`) REFERENCES `bodega`(`id`),
    FOREIGN KEY (`variedad_id`) REFERENCES `variedad`(`id`)
);

CREATE TABLE  `promocion`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `precio` DECIMAL(6,2) NOT NULL,
    `producto_id` INT,
	PRIMARY KEY (`id`),
    KEY `fk_idproducto_promo` (`producto_id`),
    FOREIGN KEY (`producto_id`) REFERENCES `producto`(`id`)
    
);

CREATE TABLE  `cliente`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NOT NULL,
    `telefono` VARCHAR(60),
     PRIMARY KEY (`id`)
);  

CREATE TABLE  `domicilio`(
    `cliente_id` INT, 
    `calle` VARCHAR(100) NOT NULL,
    `numero` INT NOT NULL,
    `piso` INT,
    `departamento` VARCHAR(100),
    `localidad` VARCHAR(100) NOT NULL,
    `codigo_postal` INT NOT NULL,
	 KEY `fk_clienteID` (`cliente_id`),
     CONSTRAINT `fk_clienteID` FOREIGN KEY (`cliente_id`) REFERENCES `cliente`(`id`)
);

CREATE TABLE  `orden_cliente`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `total` DECIMAL(6,2) NOT NULL,
    `fecha_creacion` TIMESTAMP,
    `numero_confirmacion` INT NOT NULL,
    `cliente_id` INT NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`cliente_id`) REFERENCES `cliente`(`id`)
);

CREATE TABLE `orden_cliente_producto`(
	`orden_cliente_id` INT NOT NULL,
    `producto_id` INT NOT NULL,
    `cantidad` INT,
    PRIMARY KEY (`orden_cliente_id`,`producto_id`),
    KEY `fk_idordencliente` (`orden_cliente_id`),
    KEY `fk_idproducto` (`producto_id`),
    CONSTRAINT `fk_idordencliente` FOREIGN KEY (`orden_cliente_id`) REFERENCES `orden_cliente`(`id`),
    CONSTRAINT `fk_idproducto` FOREIGN KEY (`producto_id`) REFERENCES `producto`(`id`)
);


CREATE TABLE `role` (
  `id` INT AUTO_INCREMENT NOT NULL,
  `rol` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE  `user`(
    `id` INT AUTO_INCREMENT NOT NULL,
    `email` VARCHAR(100) UNIQUE NOT NULL,
    `password` VARCHAR(80) NOT NULL,
    `is_activo` BOOLEAN DEFAULT FALSE,
    `cliente_id` INT, 
    PRIMARY KEY (`id`),
    KEY `fk_idcliente` (`cliente_id`),
    CONSTRAINT `fk_idcliente` FOREIGN KEY (`cliente_id`) REFERENCES `cliente`(`id`)
);  

CREATE TABLE `user_role` (
  `user_id` INT NOT NULL,
  `role_id` INT NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `fk_iduser` (`user_id`),
  KEY `fk_idrole` (`role_id`),
  CONSTRAINT `fk_iduser` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`),
  CONSTRAINT `fk_idrole` FOREIGN KEY (`role_id`) REFERENCES `role`(`id`)
); 