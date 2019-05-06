DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR (100) NOT NULL,
  department_name VARCHAR (15) NOT NULL,
  price FLOAT (8) NOT NULL,
  stock_quantity INT (4),
  PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Eukenuba", "Pet Food", 23.99, 12),
   ("Sheba", "Pet Food", 0.84, 24),
   ("The Man Who Killed Hitler and then the Bigfoot", "DVD/BluRay", 18.95, 34),
   ("Silicon Valley Season 2", "DVD/BluRay", 15.85, 4),
   ("Big Trouble in Little China", "DVD/BluRay", 18.89, 23),
   ("Uni-ball Gel Pens", "Office Supplies", 16.75, 30),
   ("P is for Pteradactyl", "Books", 12.79, 6),
   ("American Housewife", "Books", 15.76, 11),
   ("Dior: Yves Saint Laurent", "Books", 153.34, 14),
   ("Dior: Christian Dior", "Books", 135.00, 16),
   ("Dior: Marc Bohan", "Books", 205.96, 7);
