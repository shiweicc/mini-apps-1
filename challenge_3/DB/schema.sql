DROP DATABASE IF EXISTS checkout;
CREATE DATABASE checkout;

USE checkout;

DROP SCHEMA IF EXISTS customer;
CREATE TABLE customer (
  id INT NOT NULL AUTO_INCREMENT,
  fullname VARCHAR(50),
  email VARCHAR(250),
  password VARCHAR(50),
  address_line1 VARCHAR(500),
  address_line2 VARCHAR(500),
  city VARCHAR(50),
  state VARCHAR(50),
  zipcode INT,
  phone_number VARCHAR(50),
  credit_card_num INT,
  expiry_date VARCHAR(50),
  CVV INT,
  billing_zipcode INT,
  PRIMARY KEY (id)
);
