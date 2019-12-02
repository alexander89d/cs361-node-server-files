-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: classmysql.engr.oregonstate.edu:3306
-- Generation Time: Dec 01, 2019 at 12:03 PM
-- Server version: 10.3.13-MariaDB-log
-- PHP Version: 7.0.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cs361_densmora`
--

-- --------------------------------------------------------

--
-- Table structure for table `user_account_data`
--

CREATE TABLE `user_account_data` (
  `email` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `mobile_number` varchar(100) DEFAULT NULL,
  `date_of_birth` date NOT NULL,
  `subscribe_to_newsletter` tinyint(1) DEFAULT 0,
  `receive_mobile_alerts` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_account_data`
--

INSERT INTO `user_account_data` (`email`, `name`, `mobile_number`, `date_of_birth`, `subscribe_to_newsletter`, `receive_mobile_alerts`) VALUES
('test@test.com', 'Test User', NULL, '2000-01-01', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `user_carbon_data`
--

CREATE TABLE `user_carbon_data` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL,
  `date` date NOT NULL,
  `category` varchar(100) NOT NULL,
  `amount_used` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_carbon_data`
--

INSERT INTO `user_carbon_data` (`id`, `email`, `date`, `category`, `amount_used`) VALUES
(1, 'test@test.com', '2000-01-01', 'travel', 50);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user_account_data`
--
ALTER TABLE `user_account_data`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `user_carbon_data`
--
ALTER TABLE `user_carbon_data`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_carbon_data_fk1` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user_carbon_data`
--
ALTER TABLE `user_carbon_data`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `user_carbon_data`
--
ALTER TABLE `user_carbon_data`
  ADD CONSTRAINT `user_carbon_data_fk1` FOREIGN KEY (`email`) REFERENCES `user_account_data` (`email`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
