-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 20, 2023 at 07:03 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbcustomtees`
--

-- --------------------------------------------------------

--
-- Table structure for table `tblcategory`
--

DROP TABLE IF EXISTS `tblcategory`;
CREATE TABLE IF NOT EXISTS `tblcategory` (
  `categoryid` int NOT NULL AUTO_INCREMENT,
  `categoryname` varchar(50) NOT NULL,
  `image` varchar(100) NOT NULL,
  PRIMARY KEY (`categoryid`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tblcategory`
--

INSERT INTO `tblcategory` (`categoryid`, `categoryname`, `image`) VALUES
(1, 'Half', 'categoryhalf.jpg'),
(2, 'Full- sleeve', 'categoryfullsleeve.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `tblcolor`
--

DROP TABLE IF EXISTS `tblcolor`;
CREATE TABLE IF NOT EXISTS `tblcolor` (
  `colorid` int NOT NULL AUTO_INCREMENT,
  `color` varchar(50) NOT NULL,
  PRIMARY KEY (`colorid`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tblcolor`
--

INSERT INTO `tblcolor` (`colorid`, `color`) VALUES
(1, 'White'),
(2, 'Black'),
(4, 'Blue');

-- --------------------------------------------------------

--
-- Table structure for table `tblcustomer`
--

DROP TABLE IF EXISTS `tblcustomer`;
CREATE TABLE IF NOT EXISTS `tblcustomer` (
  `customerid` int NOT NULL AUTO_INCREMENT,
  `customername` varchar(50) NOT NULL,
  `email` text NOT NULL,
  `phone` bigint NOT NULL,
  `customerphoto` varchar(100) NOT NULL,
  `regdate` date NOT NULL,
  `locationid` int NOT NULL,
  `districtid` int NOT NULL,
  `loginid` int NOT NULL,
  PRIMARY KEY (`customerid`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tblcustomer`
--

INSERT INTO `tblcustomer` (`customerid`, `customername`, `email`, `phone`, `customerphoto`, `regdate`, `locationid`, `districtid`, `loginid`) VALUES
(7, 'Adam', 'jibinbiju038@gmail.com', 8590252334, 'freesvgorg182593.jpg', '2023-12-07', 1, 1, 8),
(18, 'Felix', 'felix@gmail.com', 8590252334, 'young-man-anime-style-character-600nw-2313503433.jpg', '2023-12-19', 1, 1, 19),
(15, 'Eby', 'eby@gmail.com', 8590252334, '3538558-middle.jpg', '2023-12-19', 1, 1, 16),
(16, 'Amal', 'amal@gmail.com', 8590252334, 'main-qimg-f0f69a02bbc5adb7be63e11e83adab44-lq.jpg', '2023-12-19', 1, 1, 17),
(13, 'Karthik', 'jaguargaming123456i@gmail.com', 8590252334, '12ca67e6dcd0b0ec5d4ff56eece422ed.jpg', '2023-12-19', 1, 1, 14);

-- --------------------------------------------------------

--
-- Table structure for table `tbldistrict`
--

DROP TABLE IF EXISTS `tbldistrict`;
CREATE TABLE IF NOT EXISTS `tbldistrict` (
  `districtid` int NOT NULL AUTO_INCREMENT,
  `districtname` varchar(50) NOT NULL,
  PRIMARY KEY (`districtid`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbldistrict`
--

INSERT INTO `tbldistrict` (`districtid`, `districtname`) VALUES
(1, 'Idukki'),
(2, 'Kollam'),
(10, 'Alappuzha');

-- --------------------------------------------------------

--
-- Table structure for table `tblfinalproduct`
--

DROP TABLE IF EXISTS `tblfinalproduct`;
CREATE TABLE IF NOT EXISTS `tblfinalproduct` (
  `finalproductid` int NOT NULL AUTO_INCREMENT,
  `admindesign` varchar(100) NOT NULL,
  `customizationprice` int NOT NULL,
  `admindescription` text NOT NULL,
  `totalquantity` int NOT NULL,
  `money` int NOT NULL,
  `loginid` int NOT NULL,
  `requestid` int NOT NULL,
  PRIMARY KEY (`finalproductid`)
) ENGINE=MyISAM AUTO_INCREMENT=50 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tblfinalproduct`
--

INSERT INTO `tblfinalproduct` (`finalproductid`, `admindesign`, `customizationprice`, `admindescription`, `totalquantity`, `money`, `loginid`, `requestid`) VALUES
(46, 'theyyam-tshirt-mydesignation-image-.jpg', 1, 'Well designed', 2, 599, 8, 58),
(47, 'malayali-tshirt-mydesignation-mockup-image-latest-golden-.jpg', 1, 'Well designed', 2, 399, 8, 59),
(49, 'b56a2e62ca5f4f5012bc131b79f1b0aa.jpg', 2, 'Well designed', 3, 299, 8, 63);

-- --------------------------------------------------------

--
-- Table structure for table `tbllocation`
--

DROP TABLE IF EXISTS `tbllocation`;
CREATE TABLE IF NOT EXISTS `tbllocation` (
  `locationid` int NOT NULL AUTO_INCREMENT,
  `locationname` varchar(50) NOT NULL,
  `districtid` int NOT NULL,
  PRIMARY KEY (`locationid`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbllocation`
--

INSERT INTO `tbllocation` (`locationid`, `locationname`, `districtid`) VALUES
(1, 'Vazhithala', 1),
(2, 'Thodupuzha', 1),
(3, 'Paravur', 2),
(5, 'Alappuzha', 10);

-- --------------------------------------------------------

--
-- Table structure for table `tbllogin`
--

DROP TABLE IF EXISTS `tbllogin`;
CREATE TABLE IF NOT EXISTS `tbllogin` (
  `loginid` int NOT NULL AUTO_INCREMENT,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `role` varchar(50) NOT NULL,
  PRIMARY KEY (`loginid`)
) ENGINE=MyISAM AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tbllogin`
--

INSERT INTO `tbllogin` (`loginid`, `email`, `password`, `role`) VALUES
(1, 'admin@gmail.com', 'Admin', 'Admin'),
(16, 'eby@gmail.com', '2122', 'User'),
(8, 'jibinbiju038@gmail.com', '2122', 'User'),
(19, 'felix@gmail.com', '2122', 'User'),
(14, 'jaguargaming123456i@gmail.com', '2122', 'User'),
(17, 'amal@gmail.com', '2122', 'User');

-- --------------------------------------------------------

--
-- Table structure for table `tblpayment`
--

DROP TABLE IF EXISTS `tblpayment`;
CREATE TABLE IF NOT EXISTS `tblpayment` (
  `paymentid` int NOT NULL AUTO_INCREMENT,
  `finalproductid` int NOT NULL,
  `paid` int NOT NULL,
  `paymentdate` date NOT NULL,
  `paymentstatus` varchar(50) NOT NULL,
  PRIMARY KEY (`paymentid`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tblpayment`
--

INSERT INTO `tblpayment` (`paymentid`, `finalproductid`, `paid`, `paymentdate`, `paymentstatus`) VALUES
(28, 46, 599, '2023-12-09', 'Paid'),
(29, 47, 399, '2023-12-16', 'Paid'),
(32, 49, 299, '2023-12-19', 'Paid');

-- --------------------------------------------------------

--
-- Table structure for table `tblproduct`
--

DROP TABLE IF EXISTS `tblproduct`;
CREATE TABLE IF NOT EXISTS `tblproduct` (
  `productid` int NOT NULL AUTO_INCREMENT,
  `productname` varchar(50) NOT NULL,
  `price` int NOT NULL,
  `pimage` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `categoryid` int NOT NULL,
  PRIMARY KEY (`productid`)
) ENGINE=MyISAM AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tblproduct`
--

INSERT INTO `tblproduct` (`productid`, `productname`, `price`, `pimage`, `description`, `categoryid`) VALUES
(8, 'Full-sleeve t-shirt', 399, 'productfullsleeve1.jpg', 'Good', 2),
(6, 'Half t-shirt', 299, 'producthalf1.jpg', 'Good', 1),
(7, 'Half t-shirtB', 199, 'producthalf2.png', 'Good', 1),
(9, 'Full sleeve t-shirtB', 349, '67_99b27724-d8fa-4643-827e-dbb62badcf83_1080x1080.jpeg', 'Good  ', 2),
(10, 'Full sleee t-shirtC', 349, '66_2315e0b4-8b3f-4697-97c1-b3747a26399f_1080x1080.jpeg', 'Good', 2),
(13, 'Half t-shirtC', 99, 'hmgoepprod.jpeg', 'Good  ', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tblrequest`
--

DROP TABLE IF EXISTS `tblrequest`;
CREATE TABLE IF NOT EXISTS `tblrequest` (
  `requestid` int NOT NULL AUTO_INCREMENT,
  `colorid` int NOT NULL,
  `customerdesign` varchar(100) NOT NULL,
  `customerdesigndescription` text NOT NULL,
  `deliveryaddress` text NOT NULL,
  `requireddate` date NOT NULL,
  `requestdate` date NOT NULL,
  `requeststatus` varchar(50) NOT NULL,
  `loginid` int NOT NULL,
  `productid` int NOT NULL,
  PRIMARY KEY (`requestid`)
) ENGINE=MyISAM AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tblrequest`
--

INSERT INTO `tblrequest` (`requestid`, `colorid`, `customerdesign`, `customerdesigndescription`, `deliveryaddress`, `requireddate`, `requestdate`, `requeststatus`, `loginid`, `productid`) VALUES
(58, 1, 'customerdesign1.png', 'Put design front of t-shirt', 'Vazhithala', '2023-12-31', '2023-12-09', 'Approved', 8, 6),
(59, 1, 'attachment_54547111.jpg', 'Put design front of t-shirt', 'Vazhithala', '2023-12-31', '2023-12-16', 'Approved', 8, 7),
(62, 1, '12ca67e6dcd0b0ec5d4ff56eece422ed.jpg', 'a', 'a', '2023-12-06', '2023-12-19', 'Requested', 2, 6),
(63, 1, 'skull-summer-beach-t-shirt-graphic-design-hand-drawn-line-with-digital-color-illustration-vector.jpg', 'Put design front of t-shirt', 'Vazhithala', '2023-12-20', '2023-12-19', 'Approved', 8, 13);

-- --------------------------------------------------------

--
-- Table structure for table `tblrequestsize`
--

DROP TABLE IF EXISTS `tblrequestsize`;
CREATE TABLE IF NOT EXISTS `tblrequestsize` (
  `requestsizeid` int NOT NULL AUTO_INCREMENT,
  `sizeid` int NOT NULL,
  `quantity` int NOT NULL,
  `requestid` int NOT NULL,
  PRIMARY KEY (`requestsizeid`)
) ENGINE=MyISAM AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tblrequestsize`
--

INSERT INTO `tblrequestsize` (`requestsizeid`, `sizeid`, `quantity`, `requestid`) VALUES
(67, 2, 1, 58),
(66, 1, 1, 58),
(68, 1, 1, 59),
(69, 2, 1, 59),
(73, 5, 1, 63),
(72, 1, 1, 63),
(74, 6, 1, 63);

-- --------------------------------------------------------

--
-- Table structure for table `tblsize`
--

DROP TABLE IF EXISTS `tblsize`;
CREATE TABLE IF NOT EXISTS `tblsize` (
  `sizeid` int NOT NULL AUTO_INCREMENT,
  `size` varchar(50) NOT NULL,
  `shoulder` int NOT NULL,
  `chest` int NOT NULL,
  `length` int NOT NULL,
  PRIMARY KEY (`sizeid`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `tblsize`
--

INSERT INTO `tblsize` (`sizeid`, `size`, `shoulder`, `chest`, `length`) VALUES
(1, 'S', 16, 36, 27),
(5, 'M', 17, 39, 28),
(6, 'L', 18, 41, 29);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
