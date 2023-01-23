-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema golfstatsdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `golfstatsdb` ;

-- -----------------------------------------------------
-- Schema golfstatsdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `golfstatsdb` DEFAULT CHARACTER SET utf8 ;
USE `golfstatsdb` ;

-- -----------------------------------------------------
-- Table `round`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `round` ;

CREATE TABLE IF NOT EXISTS `round` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `score` INT(11) NOT NULL,
  `course` VARCHAR(45) NOT NULL,
  `green_fee` DOUBLE NULL DEFAULT NULL,
  `lost_balls` INT(11) NULL DEFAULT NULL,
  `beverages_consumed` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8;

SET SQL_MODE = '';
DROP USER IF EXISTS golfer@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'golfer'@'localhost' IDENTIFIED BY 'golfer';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'golfer'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `round`
-- -----------------------------------------------------
START TRANSACTION;
USE `golfstatsdb`;
INSERT INTO `round` (`id`, `score`, `course`, `green_fee`, `lost_balls`, `beverages_consumed`) VALUES (1, 89, 'City Park', 65, 2, 3);
INSERT INTO `round` (`id`, `score`, `course`, `green_fee`, `lost_balls`, `beverages_consumed`) VALUES (2, 94, 'Omni Interlocken', 42, 4, 5);
INSERT INTO `round` (`id`, `score`, `course`, `green_fee`, `lost_balls`, `beverages_consumed`) VALUES (3, 85, 'Willis Case', 47, 4, 3);
INSERT INTO `round` (`id`, `score`, `course`, `green_fee`, `lost_balls`, `beverages_consumed`) VALUES (4, 90, 'Plum Creek', 67, 4, 4);
INSERT INTO `round` (`id`, `score`, `course`, `green_fee`, `lost_balls`, `beverages_consumed`) VALUES (5, 86, 'Anchorage GC', 65, 1, 5);

COMMIT;

