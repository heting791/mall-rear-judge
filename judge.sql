-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2024-04-03 10:17:54
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `xiaomimall`
--

-- --------------------------------------------------------

--
-- 表的结构 `judge`
--

CREATE TABLE `judge` (
  `id` int(255) NOT NULL,
  `orderid` int(255) NOT NULL,
  `rate` int(1) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `judge`
--

INSERT INTO `judge` (`id`, `orderid`, `rate`, `content`, `images`) VALUES
(1, 3, 5, '哈哈哈哈哈哈哈哈哈哈非常好！！！！！！', 'judge-1712048562070.jpg;judge-1712048562080.jpg;judge-1712048562088.jpg;'),
(2, 26, 5, 'hhhhhhhhhhhhhhhhhhhhhh很好很好很好！！！！！！！！！！！！！！！', 'judge-1712050672877.jpg;judge-1712050672880.jpg;judge-1712050672884.jpg;judge-1712050672899.jpg;');

--
-- 转储表的索引
--

--
-- 表的索引 `judge`
--
ALTER TABLE `judge`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `judge`
--
ALTER TABLE `judge`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
