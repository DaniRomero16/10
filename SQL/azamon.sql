DROP DATABASE IF EXISTS azamon;
CREATE DATABASE azamon;
USE azamon;

CREATE TABLE products (
    product_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    brand_name VARCHAR(20) NOT NULL,
    description VARCHAR(255) NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(product_id)
);

CREATE TABLE users (
    user_id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(20) NOT NULL,
    country_code CHAR(2) NOT NULL,
    creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(user_id)
);

CREATE TABLE sales (
    sale_id INT NOT NULL AUTO_INCREMENT,
    user_id INT NOT NULL,
    product_id INT NOT NULL,
    price FLOAT NOT NULL,
    creation_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(sale_id),
    FOREIGN KEY user_fk(user_id) REFERENCES users(user_id),
    FOREIGN KEY product_fk(product_id) REFERENCES products(product_id)
);

INSERT INTO users (user_id, name, country_code) VALUES 
(101, 'Road Runner', 'US'),
(102, 'Coyote', 'US'),
(103, 'Dartacan', 'ES'),
(104, 'Quijote', 'ES');

INSERT INTO products (product_id, brand_name, name, description, creation_date) VALUES 
(101, 'ACME', 'TNT', 'Dynamite', '2018-01-01 00:00:00'),
(102, 'ACME', 'Poison', 'Tasty', '2018-01-02 00:00:00'),
(103, 'ACME', 'Clamp', NULL, '2018-01-03 00:00:00'),
(104, 'Hacendado', 'Peanuts', NULL, '2018-01-04 00:00:00'),
(105, 'Hacendado', 'Eggs XXL', 'Fresh eggs from my farm', '2018-01-04 00:00:00'),
(106, 'Asics', 'Runner PRO', NULL, '2018-01-02 00:00:00');

INSERT INTO sales (user_id, product_id, price) VALUES 
(101, 101, 10.99), (101, 102, 11.99), (101, 103, 12.99), (101, 104, 13.99), (101, 105, 31.99),
(101, 101, 11.99), (101, 102, 12.99), (101, 103, 13.99), (101, 104, 14.99), (101, 105, 32.99),
(101, 101, 12.99), (101, 102, 13.99), (101, 103, 14.99), (101, 104, 15.99), (101, 105, 33.99),
(102, 102, 40.99), (102, 104, 29.99), (102, 105, 8.99),
(103, 101, 25.99), (103, 103, 24.99), (103, 106, 17.99);

/* Ejercicio 15*/
select YEAR(s.creation_date) as 'Year #15', month(s.creation_date) as 'Month #15'
from sales s;

/* Ejercicio 16*/
select s.price as 'Price #16',
CASE
    WHEN s.price >= 30 THEN 'Expensive'
    ELSE 'Inexpensive'
END as '¿Es Caro o no?'
from sales s;

/* Ejercicio 17*/
select UPPER(substring(p.name, 1, 3)) as '#17'
from products p;
