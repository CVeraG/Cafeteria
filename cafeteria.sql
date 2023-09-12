-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-09-2023 a las 02:43:14
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cafeteria`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE `direccion` (
  `Nombre` varchar(40) NOT NULL,
  `Edificio` varchar(40) NOT NULL,
  `Piso` int(3) NOT NULL,
  `Salon` varchar(10) NOT NULL,
  `Instrucciones` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `direccion`
--

INSERT INTO `direccion` (`Nombre`, `Edificio`, `Piso`, `Salon`, `Instrucciones`) VALUES
('Carol Zapata', 'ESCOM', 2, '1234', 'Segundo salon a la derecha'),
('Christopher', 'CIC', 1, '1111', 'Laboratorio de IA'),
('Diego', 'ESCOM edificio 2', 2, '2210', 'Entregar en la puerta'),
('Juan', 'Oficina central', 1, '1111', 'Dejar con el oficial'),
('Karla', 'Queso', 1, '1111', 'Dejar con el policia'),
('Norma', 'ENCB ', 2, '2234', 'Arriba de direccion');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `Nombre` varchar(40) NOT NULL,
  `orden` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `Total` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`Nombre`, `orden`, `Total`) VALUES
('', '{\"items\":[]}', 0),
('Carol Zapata', '{\"items\":[{\"nombre\":\"Galletas emperador\",\"cantidad\":2},{\"nombre\":\"Sandwich\",\"cantidad\":2},{\"nombre\":\"Boing\",\"cantidad\":1}]}', 126),
('Christopher', '{\"items\":[{\"nombre\":\"Capuccino\",\"cantidad\":2},{\"nombre\":\"Galletas emperador\",\"cantidad\":2},{\"nombre\":\"Sandwich\",\"cantidad\":2}]}', 156),
('Diego', '{\"items\":[{\"nombre\":\"Galletas emperador\",\"cantidad\":1},{\"nombre\":\"Sandwich\",\"cantidad\":1},{\"nombre\":\"Sabritas\",\"cantidad\":1}]}', 71),
('Dios', '{\"items\":[{\"nombre\":\"Sandwich\",\"cantidad\":1}]}', 35),
('fda', '{\"items\":[{\"nombre\":\"Capuccino\",\"cantidad\":2}]}', 50),
('Juan', '{\"items\":[{\"nombre\":\"Capuccino\",\"cantidad\":2},{\"nombre\":\"Maruchan\",\"cantidad\":1}]}', 74),
('Karla', '{\"items\":[{\"nombre\":\"Capuccino\",\"cantidad\":6},{\"nombre\":\"Boing\",\"cantidad\":1},{\"nombre\":\"Maruchan\",\"cantidad\":1}]}', 194),
('Norma', '{\"items\":[{\"nombre\":\"Capuccino\",\"cantidad\":2},{\"nombre\":\"Maruchan\",\"cantidad\":2}]}', 98);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`Nombre`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`Nombre`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
