-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2024. Ápr 07. 16:13
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `fruitwebshop`
--
CREATE DATABASE IF NOT EXISTS `fruitwebshop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_hungarian_ci;
USE `fruitwebshop`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `fruits`
--

CREATE TABLE `fruits` (
  `FruitId` int(11) NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` text DEFAULT NULL,
  `Price` int(11) NOT NULL,
  `StockQuantity` int(11) NOT NULL,
  `ImageUrl` varchar(255) DEFAULT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `UpdatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `fruits`
--

INSERT INTO `fruits` (`FruitId`, `Name`, `Description`, `Price`, `StockQuantity`, `ImageUrl`, `CreatedAt`, `UpdatedAt`) VALUES
(1, 'Alma', 'Fresh and crispy apple', 600, 100, 'apple.jpg', '2023-12-27 11:59:05', '2024-04-07 11:54:08'),
(2, 'Banán', 'Ripe and sweet banana', 750, 150, 'banana.jpg', '2023-12-27 11:59:05', '2024-04-07 11:54:16'),
(3, 'Narancs', 'Juicy and tangy orange', 1000, 120, 'orange.jpg', '2023-12-27 11:59:05', '2024-04-07 11:54:24'),
(4, 'Szőlő', 'Sweet and seedless grapes', 2500, 80, 'grapes.jpg', '2023-12-27 11:59:05', '2024-04-07 11:54:33'),
(5, 'Mangó', 'Juicy and Sweet', 4500, 100, 'mango.jpg', '2024-04-07 08:27:34', '2024-04-07 11:54:38'),
(6, 'Cseresznye', 'Sweet and Fresh', 1500, 100, 'cherry.jpg', '2024-04-07 08:27:34', '2024-04-07 11:54:47'),
(7, 'Körte', 'Greenish Yellow and Sweet', 1500, 100, 'pear.jpg', '2024-04-07 08:27:34', '2024-04-07 11:54:54'),
(8, 'Görögdinnye', 'Sweet and Refreshing', 400, 100, 'watermelon.jpg', '2024-04-07 08:27:34', '2024-04-07 11:55:03'),
(9, 'Eper', 'Sweet and Tasty', 1000, 100, 'strawberry.jpg', '2024-04-07 08:27:34', '2024-04-07 11:55:09'),
(10, 'Áfonya', 'Tasty', 1500, 100, 'blueberry.jpg', '2024-04-07 08:27:34', '2024-04-07 11:55:17'),
(11, 'Ananász', 'Sweet and Juicy', 3000, 100, 'pineapple.jpg', '2024-04-07 08:27:34', '2024-04-07 11:55:27'),
(12, 'Málna', 'Sweet and Tasty', 1200, 100, 'raspberry.jpg', '2024-04-07 08:27:34', '2024-04-07 11:55:40');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orderitems`
--

CREATE TABLE `orderitems` (
  `OrderItemId` int(11) NOT NULL,
  `OrderId` int(11) DEFAULT NULL,
  `FruitId` int(11) DEFAULT NULL,
  `Quantity` int(11) NOT NULL,
  `Price` decimal(10,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `orderitems`
--

INSERT INTO `orderitems` (`OrderItemId`, `OrderId`, `FruitId`, `Quantity`, `Price`) VALUES
(1, 1, 1, 3, 5.97),
(2, 1, 2, 2, 1.98),
(3, 2, 3, 1, 2.49),
(4, 2, 4, 2, 7.98);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `orders`
--

CREATE TABLE `orders` (
  `OrderId` int(11) NOT NULL,
  `UserId` int(11) DEFAULT NULL,
  `TotalAmount` decimal(10,2) NOT NULL,
  `OrderDate` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `orders`
--

INSERT INTO `orders` (`OrderId`, `UserId`, `TotalAmount`, `OrderDate`) VALUES
(1, 1, 7.95, '2023-01-01 09:00:00'),
(2, 2, 4.98, '2023-01-02 13:30:00');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `PasswordHash` varchar(255) NOT NULL,
  `Email` varchar(100) NOT NULL,
  `CreatedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `users`
--

INSERT INTO `users` (`UserId`, `Username`, `PasswordHash`, `Email`, `CreatedAt`) VALUES
(1, 'john_doe', 'hashed_password_1', 'john.doe@example.com', '2023-12-27 12:10:32'),
(2, 'jane_smith', 'hashed_password_2', 'jane.smith@example.com', '2023-12-27 12:10:32'),
(3, 'admin', 'hashed_password_admin', 'admin@example.com', '2023-12-27 12:10:32');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `fruits`
--
ALTER TABLE `fruits`
  ADD PRIMARY KEY (`FruitId`);

--
-- A tábla indexei `orderitems`
--
ALTER TABLE `orderitems`
  ADD PRIMARY KEY (`OrderItemId`),
  ADD KEY `OrderId` (`OrderId`),
  ADD KEY `FruitId` (`FruitId`);

--
-- A tábla indexei `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`OrderId`),
  ADD UNIQUE KEY `UserId` (`UserId`);

--
-- A tábla indexei `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `fruits`
--
ALTER TABLE `fruits`
  MODIFY `FruitId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT a táblához `orderitems`
--
ALTER TABLE `orderitems`
  MODIFY `OrderItemId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT a táblához `orders`
--
ALTER TABLE `orders`
  MODIFY `OrderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `orderitems`
--
ALTER TABLE `orderitems`
  ADD CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`OrderId`) REFERENCES `orders` (`OrderId`) ON DELETE CASCADE,
  ADD CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`FruitId`) REFERENCES `fruits` (`FruitId`) ON DELETE CASCADE;

--
-- Megkötések a táblához `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
