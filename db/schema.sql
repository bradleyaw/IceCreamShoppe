CREATE DATABASE icecream_db;

USE icecream_db;

CREATE TABLE icecreams (
    id INT(10) AUTO_INCREMENT NOT NULL,
    icecream_name VARCHAR(55) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)