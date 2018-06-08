INSERT INTO `restaurante`.`provedors` (`id`, `name`, `address`, `phone`, `email`, `description`, `createdAt`, `updatedAt`) VALUES ('1', 'Sabia Fruta', 'Río Tigris 44-k, Cuauhtémoc, 06500 Ciudad de México, CDMX', '26122255', 'fruta@sabia.com', '	Proveedor con los mejores precios', '2018-06-04', '2018-06-04');
INSERT INTO `restaurante`.`provedors` (`id`, `name`, `address`, `phone`, `email`, `createdAt`, `updatedAt`) VALUES ('2', 'Distribuidor de Frutas y Legumbres Serrano', 'L- A, Calle Ramón Isaac Aldana 22, Cuauhtémoc, 06860 Ciudad de México, CDMX', '5557402753', 'frutas@importacion.com', '2018-06-04', '2018-06-04');
INSERT INTO `restaurante`.`provedors` (`id`, `name`, `address`, `phone`, `email`, `createdAt`, `updatedAt`) VALUES ('3', 'Esperanza', 'Calle Genaro García 58, Jardín Balbuena, 15900 Ciudad de México, CDMX', '5562850420', '	PanaderiaBalbueba@esperanza.com	', '2018-06-04', '2018-06-04');



INSERT INTO `restaurante`.`products` (`id`, `name`, `amount`, `unit`, `minStock`, `maxStock`, `kind`, `createdAt`, `updatedAt`, `provedorId`) VALUES ('1', 'Sandia', '0', 'Pzs', '10', '14', true, '2018-06-04', '2018-06-04', '1');
INSERT INTO `restaurante`.`products` (`id`, `name`, `amount`, `unit`, `minStock`, `maxStock`, `kind`, `createdAt`, `updatedAt`, `provedorId`) VALUES ('2', 'Manzanas verdes', '10', 'Pzs', '5', '10', true, '2018-06-04', '2018-06-04', '2');
INSERT INTO `restaurante`.`products` (`id`, `name`, `amount`, `unit`, `minStock`, `maxStock`, `kind`, `createdAt`, `updatedAt`, `provedorId`) VALUES ('3', 'Mango', '1', 'Kg', '5', '10', true, '2018-06-04', '2018-06-04', '2');
INSERT INTO `restaurante`.`products` (`id`, `name`, `amount`, `unit`, `minStock`, `maxStock`, `kind`, `createdAt`, `updatedAt`, `provedorId`) VALUES ('4', 'Jitomate', '0', 'Kg', '5', '8', true, '2018-06-04', '2018-06-04', '3');
INSERT INTO `restaurante`.`products` (`id`, `name`, `amount`, `unit`, `minStock`, `maxStock`, `kind`, `createdAt`, `updatedAt`, `provedorId`) VALUES ('5', 'Bagguette', '0', 'Pzs', '10', '20', true, '2018-06-04', '2018-06-04', '3');
INSERT INTO `restaurante`.`products` (`id`, `name`, `amount`, `unit`, `minStock`, `maxStock`, `kind`, `createdAt`, `updatedAt`, `provedorId`) VALUES ('6', 'Telera', '14', 'Pzs', '15', '25', true, '2018-06-04', '2018-06-04', '3');


INSERT INTO `restaurante`.`orders` (`id`, `total`, `status`, `deliveryDate`, `createdAt`, `updatedAt`) VALUES ('1', '100', true, '2018-06-04', '2018-06-04', '2018-06-04');
INSERT INTO `restaurante`.`orders` (`id`, `total`, `status`, `deliveryDate`, `createdAt`, `updatedAt`) VALUES ('2', '100', false, '2018-06-04', '2018-06-04', '2018-06-04');


INSERT INTO `restaurante`.`productorders` (`amount`, `price`, `createdAt`, `updatedAt`, `orderId`, `productId`) VALUES ('4', '10', '2018-06-04', '2018-06-04', '1', '1');
INSERT INTO `restaurante`.`productorders` (`amount`, `price`, `createdAt`, `updatedAt`, `orderId`, `productId`) VALUES ('4', '10', '2018-06-04', '2018-06-04', '1', '2');
INSERT INTO `restaurante`.`productorders` (`amount`, `price`, `createdAt`, `updatedAt`, `orderId`, `productId`) VALUES ('4', '5', '2018-06-04', '2018-06-04', '1', '3');
