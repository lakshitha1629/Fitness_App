/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE IF NOT EXISTS `fitness_app` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `fitness_app`;

CREATE TABLE IF NOT EXISTS `customizedSchedule` (
  `CustomizedScheduleId` int NOT NULL AUTO_INCREMENT,
  `UserID` int DEFAULT NULL,
  `Status` int NOT NULL DEFAULT '0',
  `ScheduleTypeName` varchar(50) DEFAULT NULL,
  `Exercise` varchar(50) DEFAULT NULL,
  `Sets` varchar(50) DEFAULT NULL,
  `Kg` int DEFAULT NULL,
  `RestTime` int DEFAULT NULL,
  `Reps` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`CustomizedScheduleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40000 ALTER TABLE `customizedSchedule` DISABLE KEYS */;
INSERT INTO `customizedSchedule` (`CustomizedScheduleId`, `UserID`, `Status`, `ScheduleTypeName`, `Exercise`, `Sets`, `Kg`, `RestTime`, `Reps`) VALUES
	(1, 5, 1, 'Sunday', 'Incline Press', '10-10-10', 25, 1, NULL),
	(2, 5, 1, 'wednesday', 'Plank', '45', 5, 45, NULL),
	(3, 5, 1, 'sunday', 'Plank', '45', 5, 45, NULL),
	(4, 5, 1, 'Sunday', 'Incline Press', '10-10-10', 25, 1, '1'),
	(5, 16, 1, 'friday', 'Crunch', '3', 4, 4, '3'),
	(6, 16, 0, 'wednesday', 'Free Weights', '3', 4, 4, '4'),
	(7, 16, 1, 'sunday', 'Free Weights', '3', 4, 4, '4'),
	(8, 16, 1, 'friday', 'Free Weights', '3', 4, 4, '4'),
	(9, 16, 0, 'wednesday', 'Crunch', '3', 4, 4, '3'),
	(10, 16, 0, 'sunday', 'Crunch', '3', 4, 4, '3'),
	(11, 10, 0, 'sunday', 'Body Conditioning', '10', 10, 2, '10'),
	(12, 10, 0, 'tuesday', 'Body Conditioning', '10', 10, 2, '10'),
	(13, 18, 1, 'wednesday', 'Plank', '10', 10, 2, '8'),
	(14, 18, 0, 'tuesday', 'Plank', '10', 10, 2, '8'),
	(15, 18, 0, 'thursday', 'Plank', '10', 10, 2, '8'),
	(16, 12, 0, 'tuesday', 'Free Weights', '10', 10, 2, '10'),
	(17, 12, 0, 'sunday', 'Free Weights', '10', 10, 2, '10'),
	(18, 13, 1, 'thursday', 'Free Weights', '2', 21, 2, '3'),
	(19, 13, 1, 'monday', 'Crunch', '2', 1, 2, '2'),
	(20, 13, 1, 'monday', 'Fixed Weights', '2', 1, 4, '2'),
	(21, 13, 1, 'monday', 'Free Weights', '2', 21, 2, '3'),
	(22, 13, 1, 'thursday', 'Fixed Weights', '2', 1, 4, '2'),
	(23, 13, 1, 'thursday', 'Crunch', '2', 1, 2, '2');
/*!40000 ALTER TABLE `customizedSchedule` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `MealPlan` (
  `MealPlanId` int NOT NULL AUTO_INCREMENT,
  `UserId` int DEFAULT '0',
  `StartDate` timestamp NULL DEFAULT NULL,
  `EndDate` timestamp NULL DEFAULT NULL,
  `SelectDays` longtext,
  `Breakfast` longtext,
  `MidMorningSnack` varchar(255) DEFAULT NULL,
  `Lunch` longtext,
  `AfternoonSnack` varchar(255) DEFAULT NULL,
  `Dinner` longtext,
  `Status` int DEFAULT '0',
  `ApprovedBy` int DEFAULT NULL,
  PRIMARY KEY (`MealPlanId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40000 ALTER TABLE `MealPlan` DISABLE KEYS */;
INSERT INTO `MealPlan` (`MealPlanId`, `UserId`, `StartDate`, `EndDate`, `SelectDays`, `Breakfast`, `MidMorningSnack`, `Lunch`, `AfternoonSnack`, `Dinner`, `Status`, `ApprovedBy`) VALUES
	(2, 5, '2022-09-04 00:00:00', '2023-09-04 00:00:00', 'Monday, sunday', 'One grapefruit Two poached eggs (or fried in a non-stick pan) One slice 100% whole wheat toast Macronutrients: approximately 327 calories, 18 grams protein, 41 grams carbohydrates, and 11 grams fat', '', '6 ounces grilled chicken breast Large garden salad (3 cups mixed greens with 1 cup cherry tomatoes, 1/4 avocado, topped with 2 tablespoons balsamic vinaigrette) Macronutrients: 396 calories, 41 grams protein, 18 grams carbohydrates, 18 grams fat', '', '1 cup steamed broccoli 1 cup of brown rice Halibut (4-ounce portion) Macronutrients: 399 calories, 34 grams protein, 57 grams carbohydrates, 4 grams fat', 1, 6),
	(3, 16, '2022-09-12 00:00:00', '2022-09-30 00:00:00', 'monday thursday saturday ', 'Vegetable', 'no', 'Rice with curry', 'no', 'Potato', 1, 3);
/*!40000 ALTER TABLE `MealPlan` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `Schedule` (
  `ScheduleId` int NOT NULL AUTO_INCREMENT,
  `ScheduleTypeName` varchar(50) DEFAULT NULL,
  `Exercise` varchar(50) DEFAULT NULL,
  `Sets` varchar(50) DEFAULT NULL,
  `Kg` int DEFAULT NULL,
  `RestTime` int DEFAULT NULL,
  PRIMARY KEY (`ScheduleId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40000 ALTER TABLE `Schedule` DISABLE KEYS */;
INSERT INTO `Schedule` (`ScheduleId`, `ScheduleTypeName`, `Exercise`, `Sets`, `Kg`, `RestTime`) VALUES
	(1, 'Schedule 01', 'Incline Press ', '10-10-10', 25, 1),
	(2, 'Schedule 01', 'DB Chest Fly', '10-10-10-10', 5, 1),
	(3, 'Schedule 01', 'Bench Press', '10-10-10-10', 5, 1),
	(4, 'Schedule 01', 'Overhead Press', '10-10-10-10', 5, 1),
	(5, 'Schedule 01', 'Front Raises', '10-10-10-10', 10, 2),
	(6, 'Schedule 01', 'Side Raises', '10-10-10-10', 5, 1),
	(7, 'Schedule 01', 'Bent over Raises', '10-10-10-10', 5, 1),
	(8, 'Schedule 01', 'Cable Fly ', '10-10-10-10', 10, 2),
	(9, 'Schedule 01', 'Bar Dips', '10-10-10-10', 0, 1),
	(11, 'Schedule 01', 'Leg Press', '10-10-10-10', 25, 2),
	(12, 'Schedule 01', 'Leg Curl', '10-10-10-10', 25, 2),
	(13, 'Schedule 01', 'Push-up', '10-10-10-10', 0, 1),
	(14, 'Schedule 01', 'Scott', '10-10-10-10', 30, 2),
	(15, 'Schedule 02', 'Scott', '10-10-10-10', 30, 2);
/*!40000 ALTER TABLE `Schedule` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `User` (
  `UserId` int NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(50) DEFAULT NULL,
  `MiddleName` varchar(50) DEFAULT NULL,
  `LastName` varchar(50) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `HomeAddress` varchar(50) DEFAULT NULL,
  `MobileNumber` int DEFAULT NULL,
  `Email` varchar(50) DEFAULT NULL,
  `Username` varchar(50) DEFAULT NULL,
  `Password` varchar(50) DEFAULT NULL,
  `CurrentWeight` int DEFAULT NULL,
  `CurrentHeight` int DEFAULT NULL,
  `BloodType` varchar(50) DEFAULT NULL,
  `Allergies` int DEFAULT '0',
  `UserRole` int DEFAULT NULL,
  PRIMARY KEY (`UserId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` (`UserId`, `FirstName`, `MiddleName`, `LastName`, `Gender`, `DOB`, `HomeAddress`, `MobileNumber`, `Email`, `Username`, `Password`, `CurrentWeight`, `CurrentHeight`, `BloodType`, `Allergies`, `UserRole`) VALUES
	(6, 'bevylabs@gmail.com', 'bevylabs@gmail.com', 'bevylabs@gmail.com', 'bevylabs@gmail.com', '2022-09-21', 'bevylabs@gmail.com', 45456213, 'bevylabs@gmail.com', 'test', 'ceb6c970658f31504a901b89dcd3e461', 89, 46, '45', 0, 1),
	(8, 'Admin', 'Admin', 'Admin', 'Male', '2022-09-13', '40, Franso, Salamado', 78565623, 'admin@gmail.com', 'admin', '21232f297a57a5a743894a0e4a801fc3', 45, 89, 'A', 0, 3),
	(10, 'Kamal', 'Kumar', 'perera', 'Male', '1995-09-04', 'nugegoda', 779996367, 'chorch@gmail.com', 'chorch', '3bdfa4d20b339d75e1edecd490ae20ca', 85, 150, 'Slim', 0, 2),
	(12, 'Kamal', 'JW', 'Salmal', 'Male', '2022-09-27', 'No, 20, Haklond, Hask', 84561322, 'coachone@gmail.com', 'coco', '25d55ad283aa400af464c76d713c07ad', 23, 23, 'A', 1, 2),
	(13, 'user', 'user', 'user', 'male', '2022-09-21', 'No5 xyz rd', 789453112, 'user@gmail.com', 'user', 'ee11cbb19052e40b07aac0ca060c23ee', 12, 12, 'B', 1, 1),
	(14, 'Kamal', 'Kumar', 'perera', 'Male', '1995-09-04', 'nugegoda', 779996367, 'chorch@gmail.com', '456', '3bdfa4d20b339d75e1edecd490ae20ca', 85, 150, 'Slim', 0, 1),
	(15, 'Kamal', 'Kumar', 'perera', 'Male', '1995-09-04', 'nugegoda', 779996367, 'chorch@gmail.com', '963', '3bdfa4d20b339d75e1edecd490ae20ca', 85, 150, 'Slim', 0, 1),
	(16, 'user1', 'user1', 'user1', 'mal', '2022-09-19', '45, zyx rd, qwe', 789456123, 'user1@gmail.com', 'user1', '24c9e15e52afc47c225b757e7bee1f9d', 12, 45, 'A', 1, 1),
	(18, 'Sanduni', 'Y', 'Perera', 'Female', '1998-10-20', 'abcd', 703201742, 'sandunikumarage@gmail.com', 'Sanduni', 'd9fd75a5799caca3601f80bd05bc609a', 51, 161, 'AB', 0, 1),
	(19, 'Samantha', 'Tolm', 'Salaman', 'Male', '2000-07-19', 'dfsd', 454545454, '5454@gmnailc.om', 'salamanka', '637ccaf934cf2e1a9e9c906a52efbccd', 23, 13, 'A', 1, 1),
	(20, 'Samantha', 'Tolm', 'Salaman', 'Male', '2000-07-19', 'dfsd', 454545454, '5454@gmnailc.om', 'sala', '6b694e8cf87fc88d392ed8ebf81d9385', 23, 13, 'A', 1, 1),
	(21, 'Samantha', 'Tolm', 'Salaman', 'Male', '2000-07-19', 'dfsd', 454545454, '5454@gmnailc.om', 'sara', '5bd537fc3789b5482e4936968f0fde95', 23, 13, 'A', 1, 1),
	(22, 'Samantha', 'Tolm', 'Salaman', 'Male', '2000-07-19', 'dfsd', 454545454, '5454@gmnailc.om', 'saraa', '5bd537fc3789b5482e4936968f0fde95', 23, 13, 'A', 1, 1),
	(23, '234', '234', '234', 'Male', '2022-09-28', '23423', 4234, 'err@ddg', 'sara123', '0e9212587d373ca58e9bada0c15e6fe4', 3424, 234, '234', 1, 1),
	(24, 'coco', 'coco', 'coco', 'Male', '2022-09-27', 'user', 323124124, 'coco', 'sara343', '00a68924feb5d6bbebf8d266666b5621', 23, 23, '123', 1, 1),
	(25, 'sdf', 'sdf', 'sdf', 'Male', '2022-09-29', 'sdfsf', 5435, 'cxxf', 'sala565656', '6b694e8cf87fc88d392ed8ebf81d9385', 12, 23, 'A', 1, 1),
	(26, 'Samantha', 'sdf', 'coco', 'Male', '2022-09-13', 'yrty', 54645, 'Samantha', 'sara12121', '14c879f3f5d8ed93a09f6090d77c2cc3', 34, 34, 'A', 1, 1),
	(27, 'coco', 'coco', 'coco', 'Male', '2022-09-29', 'fghdfg', 345235, 'sdrfsdf@fgdf', 'sara678', '951bb1feb19913cf52069601b421bdc1', 123, 12, '1', 1, 1),
	(28, 'Kamal', 'Kumar', 'perera', 'Male', '1995-09-04', 'nugegoda', 779996367, 'chorch@gmail.com', 'beeco', '0a0703cb8b7c44d73e9e1f9a32a40f86', 85, 150, 'Slim', 0, 2);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;

CREATE TABLE IF NOT EXISTS `UserPayment` (
  `UserPaymentId` int NOT NULL AUTO_INCREMENT,
  `UserId` int DEFAULT NULL,
  `PaymentType` int DEFAULT '0',
  `PaymentAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`UserPaymentId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40000 ALTER TABLE `UserPayment` DISABLE KEYS */;
INSERT INTO `UserPayment` (`UserPaymentId`, `UserId`, `PaymentType`, `PaymentAt`) VALUES
	(1, 5, 1, '2022-09-03 19:37:30'),
	(2, 8, 2, '2022-09-10 14:43:37'),
	(3, 27, 3, '2022-09-15 15:07:58');
/*!40000 ALTER TABLE `UserPayment` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
