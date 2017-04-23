CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INTEGER(11) AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    date TIMESTAMP,
    PRIMARY KEY (id)
);

