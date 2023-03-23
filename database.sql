-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data
-- DB name is: fs-react-shopping

CREATE TABLE "shoppingList"(
"id" SERIAL PRIMARY KEY,
"name" varchar(80) NOT NULL,
"qty" integer NOT NULL,
"unit" varchar(20) NOT NULL,
"purchased" boolean default false
);

INSERT INTO "shoppingList" ("name", "qty", "unit", "purchased")
VALUES ('Apples', 5, 'pounds', false),('Bread', 1, 'loaf', false),
('Milk', 1, 'gallon', true),('Sliced Almonds', 2, 'cups', false),
('Bananas', 2, 'bunch', true);