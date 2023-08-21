-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 11, 2023 at 02:01 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `mobile` char(10) DEFAULT NULL,
  `p_id` varchar(10) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `qty` int(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `cart_id_generate`
--

CREATE TABLE `cart_id_generate` (
  `cart_id` varchar(10) NOT NULL,
  `mobile` char(10) DEFAULT NULL,
  `issue_date` datetime DEFAULT sysdate(),
  `status` varchar(10) DEFAULT NULL CHECK (`status` in ('active','deactive'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` varchar(10) NOT NULL,
  `category_name` varchar(40) NOT NULL,
  `category_image` varchar(100) DEFAULT NULL,
  `GST_no` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `email` varchar(100) DEFAULT NULL,
  `mobile` char(10) NOT NULL,
  `password` varchar(100) DEFAULT NULL,
  `registeron` datetime DEFAULT sysdate(),
  `status` varchar(10) DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `discount`
--

CREATE TABLE `discount` (
  `offer_code` varchar(50) DEFAULT NULL,
  `subCategory_id` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `offers`
--

CREATE TABLE `offers` (
  `offer_code` varchar(50) NOT NULL,
  `offer_name` varchar(50) DEFAULT NULL,
  `valid_from` date DEFAULT NULL,
  `valid_to` date DEFAULT NULL,
  `discount_percentage` float DEFAULT NULL,
  `flat_discount` float DEFAULT NULL,
  `status` varchar(10) DEFAULT 'active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `place_order`
--

CREATE TABLE `place_order` (
  `cart_id` varchar(10) DEFAULT NULL,
  `payment_mode` varchar(15) DEFAULT NULL,
  `payment_status` varchar(10) DEFAULT NULL,
  `payment_date` datetime DEFAULT sysdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `p_id` varchar(10) NOT NULL,
  `retailer_id` varchar(50) DEFAULT NULL,
  `price` float DEFAULT NULL,
  `available_qty` int(255) DEFAULT NULL,
  `subCategory_id` varchar(10) DEFAULT NULL,
  `item_name` varchar(50) DEFAULT NULL,
  `company` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `product_description`
--

CREATE TABLE `product_description` (
  `p_id` varchar(10) DEFAULT NULL,
  `description` varchar(500) DEFAULT NULL,
  `color` varchar(16) DEFAULT NULL,
  `size` varchar(10) DEFAULT NULL,
  `weight` float DEFAULT NULL,
  `mfg` date DEFAULT NULL,
  `expirydate` date DEFAULT NULL,
  `modelname` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `retailer_banking`
--

CREATE TABLE `retailer_banking` (
  `bank_name` varchar(100) DEFAULT NULL,
  `account_no` varchar(50) NOT NULL,
  `IFSC_code` char(10) DEFAULT NULL,
  `account_holder_name` varchar(100) DEFAULT NULL,
  `branch` varchar(50) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL CHECK (`status` in ('active','deactive','inactive'))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `retailer_registration`
--

CREATE TABLE `retailer_registration` (
  `retailer_id` varchar(50) NOT NULL,
  `shop_name` varchar(200) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `owner_name` varchar(50) DEFAULT NULL,
  `registration_no` varchar(100) DEFAULT NULL,
  `registration_doc` varchar(200) DEFAULT NULL,
  `profile_photo` varchar(100) DEFAULT NULL,
  `GST_no` varchar(100) DEFAULT NULL,
  `pan_no` char(10) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `state` varchar(50) DEFAULT NULL,
  `city` varchar(50) DEFAULT NULL,
  `pincode` char(6) DEFAULT NULL,
  `contact_no` char(40) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL CHECK (`status` in ('active','deactive','inactive')),
  `registeron` datetime DEFAULT sysdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` varchar(3) NOT NULL,
  `roll_name` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `role_assign`
--

CREATE TABLE `role_assign` (
  `id` varchar(40) NOT NULL,
  `role_id` varchar(3) NOT NULL,
  `assignon` datetime DEFAULT sysdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `sub_category`
--

CREATE TABLE `sub_category` (
  `category_id` varchar(10) DEFAULT NULL,
  `subCategory_id` varchar(10) NOT NULL,
  `subCategory_name` varchar(40) DEFAULT NULL,
  `subCategory_image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(40) NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `status` varchar(20) DEFAULT 'deactivate',
  `createdon` datetime DEFAULT sysdate()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `id` varchar(40) NOT NULL,
  `mobile` char(10) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `profilephoto` varchar(100) DEFAULT NULL,
  `aadhar` char(12) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `state` varchar(20) DEFAULT NULL,
  `city` varchar(20) DEFAULT NULL,
  `pincode` char(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD KEY `mobile` (`mobile`),
  ADD KEY `p_id` (`p_id`);

--
-- Indexes for table `cart_id_generate`
--
ALTER TABLE `cart_id_generate`
  ADD PRIMARY KEY (`cart_id`),
  ADD KEY `mobile` (`mobile`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`),
  ADD UNIQUE KEY `category_name` (`category_name`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`mobile`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `discount`
--
ALTER TABLE `discount`
  ADD KEY `offer_code` (`offer_code`),
  ADD KEY `subCategory_id` (`subCategory_id`);

--
-- Indexes for table `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`offer_code`);

--
-- Indexes for table `place_order`
--
ALTER TABLE `place_order`
  ADD KEY `cart_id` (`cart_id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`p_id`),
  ADD KEY `retailer_id` (`retailer_id`),
  ADD KEY `subCategory_id` (`subCategory_id`);

--
-- Indexes for table `product_description`
--
ALTER TABLE `product_description`
  ADD KEY `p_id` (`p_id`);

--
-- Indexes for table `retailer_banking`
--
ALTER TABLE `retailer_banking`
  ADD PRIMARY KEY (`account_no`);

--
-- Indexes for table `retailer_registration`
--
ALTER TABLE `retailer_registration`
  ADD PRIMARY KEY (`retailer_id`),
  ADD UNIQUE KEY `registration_no` (`registration_no`),
  ADD UNIQUE KEY `GST_no` (`GST_no`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `roll_name` (`roll_name`);

--
-- Indexes for table `role_assign`
--
ALTER TABLE `role_assign`
  ADD PRIMARY KEY (`id`,`role_id`),
  ADD KEY `role_id` (`role_id`);

--
-- Indexes for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD PRIMARY KEY (`subCategory_id`),
  ADD UNIQUE KEY `subCategory_name` (`subCategory_name`),
  ADD KEY `category_id` (`category_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `mobile` (`mobile`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`mobile`) REFERENCES `customer` (`mobile`),
  ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`p_id`) REFERENCES `product` (`p_id`);

--
-- Constraints for table `cart_id_generate`
--
ALTER TABLE `cart_id_generate`
  ADD CONSTRAINT `cart_id_generate_ibfk_1` FOREIGN KEY (`mobile`) REFERENCES `customer` (`mobile`);

--
-- Constraints for table `discount`
--
ALTER TABLE `discount`
  ADD CONSTRAINT `discount_ibfk_1` FOREIGN KEY (`offer_code`) REFERENCES `offers` (`offer_code`),
  ADD CONSTRAINT `discount_ibfk_2` FOREIGN KEY (`subCategory_id`) REFERENCES `sub_category` (`subCategory_id`);

--
-- Constraints for table `place_order`
--
ALTER TABLE `place_order`
  ADD CONSTRAINT `place_order_ibfk_1` FOREIGN KEY (`cart_id`) REFERENCES `cart_id_generate` (`cart_id`);

--
-- Constraints for table `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_ibfk_1` FOREIGN KEY (`retailer_id`) REFERENCES `retailer_registration` (`retailer_id`),
  ADD CONSTRAINT `product_ibfk_2` FOREIGN KEY (`subCategory_id`) REFERENCES `sub_category` (`subCategory_id`);

--
-- Constraints for table `product_description`
--
ALTER TABLE `product_description`
  ADD CONSTRAINT `product_description_ibfk_1` FOREIGN KEY (`p_id`) REFERENCES `product` (`p_id`);

--
-- Constraints for table `role_assign`
--
ALTER TABLE `role_assign`
  ADD CONSTRAINT `role_assign_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `role_assign_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `role` (`role_id`);

--
-- Constraints for table `sub_category`
--
ALTER TABLE `sub_category`
  ADD CONSTRAINT `sub_category_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`);

--
-- Constraints for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD CONSTRAINT `user_profile_ibfk_1` FOREIGN KEY (`id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
