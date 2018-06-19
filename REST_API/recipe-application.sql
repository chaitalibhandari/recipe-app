-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jun 19, 2018 at 11:57 AM
-- Server version: 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `recipe-application`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
CREATE TABLE IF NOT EXISTS `comment` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `rec_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`comment_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
CREATE TABLE IF NOT EXISTS `comments` (
  `comment_id` int(11) NOT NULL AUTO_INCREMENT,
  `rec_id` int(11) NOT NULL,
  `comment_desc` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`comment_id`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `rec_id`, `comment_desc`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 5, 'gfggggggggggggggggggdgfggggd gdddd bfggggggg fdgfd', 2, '2018-06-19 15:37:03', '2018-06-19 15:37:03'),
(2, 5, 'vxxxxxxbnhhfghfgnf;;;;;;;', 2, '2018-06-19 15:55:13', '2018-06-19 15:55:13'),
(3, 1, 'dddddddd fdddddddddgfgdgf', 2, '2018-06-19 15:57:46', '2018-06-19 15:57:46'),
(4, 5, 'dddddddddd', 2, '2018-06-19 16:04:35', '2018-06-19 16:04:35'),
(5, 4, 'ffffffff', 2, '2018-06-19 16:05:24', '2018-06-19 16:05:24'),
(6, 4, 'ffffffffff4', 2, '2018-06-19 16:19:36', '2018-06-19 16:19:36'),
(7, 4, 'dddddddd vvvvvvvvvvvvv ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff', 2, '2018-06-19 16:22:30', '2018-06-19 16:22:30'),
(8, 7, 'ddddddddd cdd', 2, '2018-06-19 16:25:30', '2018-06-19 16:25:30'),
(9, 7, 'ddddddddd cdd', 2, '2018-06-19 16:25:33', '2018-06-19 16:25:33'),
(10, 7, 'ddddddddd cdd', 2, '2018-06-19 16:25:47', '2018-06-19 16:25:47'),
(11, 1, '11111111 fd', 2, '2018-06-19 16:33:21', '2018-06-19 16:33:21'),
(12, 1, 'cccv vbc', 2, '2018-06-19 16:33:31', '2018-06-19 16:33:31'),
(13, 4, 'vvvvvvv', 2, '2018-06-19 16:33:55', '2018-06-19 16:33:55'),
(14, 4, 'vvvvvvvbvb', 2, '2018-06-19 16:33:59', '2018-06-19 16:33:59'),
(15, 4, 'bvcbc', 2, '2018-06-19 16:34:02', '2018-06-19 16:34:02'),
(16, 8, 'this is awsome recipe..', 3, '2018-06-19 16:35:01', '2018-06-19 16:35:01'),
(17, 2, ' yummy', 3, '2018-06-19 16:45:37', '2018-06-19 16:45:37');

-- --------------------------------------------------------

--
-- Table structure for table `recipe`
--

DROP TABLE IF EXISTS `recipe`;
CREATE TABLE IF NOT EXISTS `recipe` (
  `rec_id` int(11) NOT NULL AUTO_INCREMENT,
  `rec_name` text NOT NULL,
  `ingredients` text NOT NULL,
  `image` text NOT NULL,
  `description` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`rec_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `recipe`
--

INSERT INTO `recipe` (`rec_id`, `rec_name`, `ingredients`, `image`, `description`, `created_at`, `updated_at`) VALUES
(1, 'cccccccc', 'dfsf ,fsd', '1529388447download1.jpg', 'fsd', '2018-06-19 11:37:27', '2018-06-19 11:37:27'),
(2, 'chicken Pulao', 'chicken ,spices ,chilli powder ,all spices ,xqw ,water ,curd', '1529388714download (1).jpg', 'The easiest and, arguably, tenderest pulled pork comes out of the slow cooker. Here, we coat pork shoulder with a spice rub of dark brown sugar, chili powder, cumin, and cinnamon, then cook it on a bed of garlic and onions moistened with chicken broth. Six to ten hours later, the juiciest pork imaginable is ready to be shredded and served atop Pulled ', '2018-06-19 11:41:54', '2018-06-19 11:41:54'),
(3, 'pasta', 'd ,ddddddd ,wew ,f ,ffffff', '1529389152recipe-image-legacy-id--1074500_11.jpg', 'ffffffffffffffffffffffffffsdfs', '2018-06-19 11:49:12', '2018-06-19 11:49:12'),
(4, 'pasta uiop', 'd,ddddddd,wew,f,ffffff', '1529389313recipe-image-legacy-id--1074500_11.jpg', 'ffffffffffffffffffffffffffsdfs', '2018-06-19 11:51:53', '2018-06-19 11:51:53'),
(5, 'pasta uiop', 'd,ddddddd,wew,f,ffffff', '1529389390recipe-image-legacy-id--1074500_11.jpg', 'ffffffffffffffffffffffffffsdfs', '2018-06-19 11:53:10', '2018-06-19 11:53:10'),
(6, 'pasta uiop', 'd,ddddddd,wew,f,ffffff', '1529389445recipe-image-legacy-id--1074500_11.jpg', 'ffffffffffffffffffffffffffsdfs', '2018-06-19 11:54:05', '2018-06-19 11:54:05'),
(7, 'fffff', 'we,e,rew,rwe,rr', '1529390225images.jpg', 'ffffffff', '2018-06-19 12:07:05', '2018-06-19 12:07:05'),
(8, 'dfdf', 'f,fd', '1529390321download.jpg', 'ffffffffffffff', '2018-06-19 12:08:41', '2018-06-19 12:08:41');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `usertype` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `username`, `email`, `password`, `usertype`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'admin', 'admin@admin.com', 'admin', 0, '2018-06-18 17:23:41', '2018-06-18 17:23:41'),
(2, 'ggggggg', 'ashwin', 'umiksha.bhandari1@gmail.com', '1234', 1, '2018-06-19 14:59:19', '2018-06-19 14:59:19'),
(3, 'ggggggg', 'ashwini', 'umiksha.bhandari1@gmail.com', '1234', 1, '2018-06-19 15:00:31', '2018-06-19 15:00:41');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
