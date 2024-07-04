-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 04, 2024 at 03:39 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hostel_management`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `booking_id` int(11) NOT NULL,
  `room_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `booking_date` date NOT NULL,
  `check_in_date` date NOT NULL,
  `check_out_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `room_id` int(11) NOT NULL,
  `room_number` varchar(10) NOT NULL,
  `type` enum('single','double') NOT NULL,
  `status` enum('available','occupied') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `address` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` enum('admin','staff') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `role`) VALUES
(1, 'admin1', 'password1', 'admin'),
(2, 'staff1', 'password2', 'staff'),
(3, 'staff2', 'password3', 'staff'),
(4, 'admin1', '$2y$10$R40OzviiRm.FtUYE2Sr97uwnqRuKDzQXUNWFE8qxadI1vjzFITlC2', 'admin'),
(5, 'staff1', '$2y$10$CMa8482rAsEM44DFWuMTnuUIG5Gu4WlJHDpCZQGiOmOPMh1YPRdFm', 'staff'),
(6, 'staff2', '$2y$10$2BXQc0rZ8TbrM3cBXjSTnubSpXKvpbGnXhr5O.TNo65acz8kcjn2G', 'staff'),
(7, 'admin1', '$2y$10$osYuGOP1O7ksWX/R.hMQE.c1egzJCRK3JZ2umLqM.i5M9NtrX3Oxq', 'admin'),
(8, 'staff1', '$2y$10$/FZJUW/F7uX24dwiVqdB7eEKScFegL6odM98egxDtukgFsXszwICS', 'staff'),
(9, 'staff2', '$2y$10$sJqW24S2PNd13djBA4E.M.2/k2euj62BxeN7Uwhof5jr7gRCecGx2', 'staff'),
(10, 'admin1', '$2y$10$zO2xkSAy/kFA6A0vL0qFMOh16TOshxtKfa0kdj.E5m5o09ZzWQRU2', 'admin'),
(11, 'staff1', '$2y$10$JxYISxsSzTsfzNzKt9za/O29r/ne7.7e30IODPbBDS9wrucMRTA3.', 'staff'),
(12, 'staff2', '$2y$10$TbQsf6A0rXlYfzWZsLhehul0y6ZHJu/L9ucPPA104x9MrdYt7quYC', 'staff'),
(13, 'admin1', '$2y$10$nQZ0afDzFWMJy.d1GJbsgu3n19r5zEyF/4E5I9va0AVFg3p8eKCbK', 'admin'),
(14, 'staff1', '$2y$10$rX2SniL6G2lSIXY/u3Y0Wu/fzVrbcxFWVqR9SbUYpwrfH0hTAoY0K', 'staff'),
(15, 'staff2', '$2y$10$VBXOzKtOVIaqORcXErmgnObJltmRISWnzDrcyjgP1cXznMips1aTm', 'staff'),
(16, 'admin1', '$2y$10$LakM02KhM/KnyAZV1K/PLOcyFaqNzCH7g9LWg/QIg0JGlZ3Oaeu7C', 'admin'),
(17, 'staff1', '$2y$10$QPEtUULUfAwK406LOw5m.OK2Sumg9ZuU1RBTsGABv/h6dI06OWMSW', 'staff'),
(18, 'staff2', '$2y$10$/veLk6Df3ou6te3tT3FuiegNE70m/omqfmTjczQeOf5H4rOJrvyfW', 'staff'),
(19, 'admin1', '$2y$10$3tGxVXBr7/C8Yq5fAALQduWMUGsvVyZXmTqNEVNh2HFxQt1lW9hmG', 'admin'),
(20, 'staff1', '$2y$10$J1I7SSVX7An5.J0EPNElkeEw9.SxkFD51ITnG.KF8aHsC4g9fz0tC', 'staff'),
(21, 'staff2', '$2y$10$K3afUicIm/RGZTOffya7heno85iAwv3NePcgRfP6NVBAy3pAddkfG', 'staff');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`booking_id`),
  ADD KEY `room_id` (`room_id`),
  ADD KEY `student_id` (`student_id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`room_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `booking_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `room_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_ibfk_1` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`room_id`),
  ADD CONSTRAINT `bookings_ibfk_2` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
