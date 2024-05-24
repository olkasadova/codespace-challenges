-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2024 at 09:30 PM
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
-- Database: `fbn`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `customer_id` int(10) UNSIGNED NOT NULL,
  `customer_firstname` varchar(50) NOT NULL,
  `customer_lastname` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `postcode` varchar(10) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `customer_email` varchar(30) NOT NULL,
  `customer_status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `customer_order`
--

CREATE TABLE `customer_order` (
  `order_id` int(10) UNSIGNED NOT NULL,
  `customer_id` int(10) UNSIGNED DEFAULT NULL,
  `item_id` int(10) NOT NULL,
  `store_id` int(10) UNSIGNED DEFAULT NULL,
  `order_datetime` datetime NOT NULL,
  `payment_id` int(10) NOT NULL,
  `employee_id` int(10) UNSIGNED DEFAULT NULL,
  `order_price` decimal(4,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `employee_id` int(10) UNSIGNED NOT NULL,
  `employee_firstname` varchar(50) NOT NULL,
  `employee_lastname` varchar(50) NOT NULL,
  `employee_address` varchar(100) NOT NULL,
  `postcode` varchar(10) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `insurance_number` int(15) NOT NULL,
  `role_id` int(10) UNSIGNED DEFAULT NULL,
  `training_id` int(10) UNSIGNED DEFAULT NULL,
  `store_id` int(10) UNSIGNED DEFAULT NULL,
  `employee_status` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`employee_id`, `employee_firstname`, `employee_lastname`, `employee_address`, `postcode`, `phone`, `email`, `insurance_number`, `role_id`, `training_id`, `store_id`, `employee_status`) VALUES
(1, 'John', 'Doe', '123 Elm St', '12345', '555-1234', 'john.doe@example.com', 2147483647, 1, 1, 1, 'Active'),
(2, 'Jane', 'Smith', '456 Oak St', '67890', '555-5678', 'jane.smith@example.com', 2147483647, 2, 2, 1, 'Active'),
(3, 'Emily', 'Johnson', '789 Pine St', '11223', '555-9012', 'emily.johnson@example.com', 2147483647, 3, 1, 2, 'Inactive'),
(4, 'Michael', 'Williams', '135 Maple St', '44556', '555-3456', 'michael.williams@example.com', 2147483647, 1, 3, 2, 'Active'),
(5, 'Jessica', 'Brown', '246 Cedar St', '77889', '555-7890', 'jessica.brown@example.com', 2147483647, 2, 2, 3, 'Active'),
(6, 'David', 'Jones', '357 Birch St', '99001', '555-2345', 'david.jones@example.com', 2147483647, 3, 1, 3, 'Inactive'),
(7, 'Sarah', 'Miller', '468 Walnut St', '22334', '555-6789', 'sarah.miller@example.com', 2147483647, 1, 3, 1, 'Active'),
(8, 'Daniel', 'Davis', '579 Cherry St', '55667', '555-0123', 'daniel.davis@example.com', 2147483647, 2, 2, 2, 'Active'),
(9, 'Laura', 'Garcia', '680 Aspen St', '88900', '555-4567', 'laura.garcia@example.com', 2147483647, 3, 1, 3, 'Inactive'),
(10, 'James', 'Martinez', '791 Willow St', '11234', '555-8901', 'james.martinez@example.com', 2147483647, 1, 3, 1, 'Active');

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE `item` (
  `item_id` int(10) UNSIGNED NOT NULL,
  `item_name` varchar(100) NOT NULL,
  `barcode` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `item`
--

INSERT INTO `item` (`item_id`, `item_name`, `barcode`) VALUES
(1, 'Cheeseburger', '2123576'),
(2, 'Bacon Burger', '2163976'),
(3, 'Veggie Burger', '3346341'),
(4, 'French Fries', '9088986'),
(5, 'Sweet Potato Fries', '2222123'),
(6, 'Coca-Cola', '24564576'),
(7, 'Pepsi', '1345345'),
(8, 'Sprite', '1789789'),
(9, 'Chocolate Brownie', '2232345'),
(10, 'Vanilla Ice Cream', '356757');

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE `payment` (
  `payment_id` int(10) UNSIGNED NOT NULL,
  `payment_amount` decimal(4,2) NOT NULL,
  `payment_method` varchar(50) NOT NULL,
  `payment_status` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `role_id` int(10) UNSIGNED NOT NULL,
  `role_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`role_id`, `role_name`) VALUES
(1, 'driver'),
(2, 'crew member'),
(3, 'customer assistant'),
(4, 'people manager');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `store_id` int(10) UNSIGNED NOT NULL,
  `store_address` varchar(100) NOT NULL,
  `store_postcode` varchar(10) NOT NULL,
  `store_email` varchar(30) NOT NULL,
  `store_phone` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`store_id`, `store_address`, `store_postcode`, `store_email`, `store_phone`) VALUES
(1, '123 Main St', '12345', 'store1@example.com', '555-1234'),
(2, '456 Market St', '67890', 'store2@example.com', '555-5678'),
(3, '789 Broadway', '11223', 'store3@example.com', '555-9012'),
(4, '135 1st Ave', '44556', 'store4@example.com', '555-3456'),
(5, '246 2nd Ave', '77889', 'store5@example.com', '555-7890'),
(6, '357 3rd Ave', '99001', 'store6@example.com', '555-2345'),
(7, '468 4th Ave', '22334', 'store7@example.com', '555-6789'),
(8, '579 5th Ave', '55667', 'store8@example.com', '555-0123'),
(9, '680 6th Ave', '88900', 'store9@example.com', '555-4567'),
(10, '791 7th Ave', '11234', 'store10@example.com', '555-8901');

-- --------------------------------------------------------

--
-- Table structure for table `trainings`
--

CREATE TABLE `trainings` (
  `training_id` int(10) UNSIGNED NOT NULL,
  `training_name` varchar(100) NOT NULL,
  `training_location` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `trainings`
--

INSERT INTO `trainings` (`training_id`, `training_name`, `training_location`) VALUES
(1, 'Customer Service Training', 'New York Office'),
(2, 'Sales Techniques', 'Los Angeles Office'),
(3, 'Leadership Development', 'Chicago Office'),
(4, 'Conflict Resolution', 'Houston Office'),
(5, 'Time Management', 'Phoenix Office'),
(6, 'Technical Skills', 'Philadelphia Office'),
(7, 'Health and Safety', 'San Antonio Office'),
(8, 'Product Knowledge', 'San Diego Office'),
(9, 'Team Building', 'Dallas Office'),
(10, 'Communication Skills', 'San Jose Office');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `customer_order`
--
ALTER TABLE `customer_order`
  ADD PRIMARY KEY (`order_id`),
  ADD KEY `fk_cust_store_id` (`store_id`),
  ADD KEY `fk_employee_id` (`employee_id`),
  ADD KEY `fk_customer_id` (`customer_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`employee_id`),
  ADD KEY `fk_role_id` (`role_id`),
  ADD KEY `fk_store_id` (`store_id`),
  ADD KEY `fk_train_id` (`training_id`);

--
-- Indexes for table `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
  ADD PRIMARY KEY (`payment_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`role_id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`store_id`);

--
-- Indexes for table `trainings`
--
ALTER TABLE `trainings`
  ADD PRIMARY KEY (`training_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `customer_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `customer_order`
--
ALTER TABLE `customer_order`
  MODIFY `order_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `employee_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `item`
--
ALTER TABLE `item`
  MODIFY `item_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
  MODIFY `payment_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `role_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `store_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `trainings`
--
ALTER TABLE `trainings`
  MODIFY `training_id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer_order`
--
ALTER TABLE `customer_order`
  ADD CONSTRAINT `fk_cust_store_id` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`),
  ADD CONSTRAINT `fk_customer_id` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`customer_id`),
  ADD CONSTRAINT `fk_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`employee_id`);

--
-- Constraints for table `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `fk_role_id` FOREIGN KEY (`role_id`) REFERENCES `roles` (`role_id`),
  ADD CONSTRAINT `fk_store_id` FOREIGN KEY (`store_id`) REFERENCES `store` (`store_id`),
  ADD CONSTRAINT `fk_train_id` FOREIGN KEY (`training_id`) REFERENCES `trainings` (`training_id`),
  ADD CONSTRAINT `fk_training_id` FOREIGN KEY (`training_id`) REFERENCES `trainings` (`training_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
