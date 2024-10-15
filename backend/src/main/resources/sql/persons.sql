CREATE DATABASE IF NOT EXISTS crud;

DROP TABLE IF EXISTS persons;

CREATE TABLE persons (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32) NOT NULL,
    lastname VARCHAR(32) NOT NULL,
    age INTEGER NOT NULL,
    dni INTEGER NOT NULL UNIQUE,
    country VARCHAR(32) NOT NULL,
    register TIMESTAMP DEFAULT NOW()
);


INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Liam', 'OConnor', 25, 12345678, 'Ireland');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Sofia', 'Gonzalez', 30, 23456789, 'Spain');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Akira', 'Takahashi', 22, 34567890, 'Japan');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Anya', 'Petrova', 28, 45678901, 'Russia');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Oliver', 'Smith', 33, 56789012, 'United Kingdom');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Fatima', 'Ali', 27, 67890123, 'Egypt');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Thiago', 'Silva', 31, 78901234, 'Brazil');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Chloe', 'Miller', 26, 89012345, 'Canada');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Maya', 'Khan', 24, 90123456, 'Pakistan');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Nia', 'Johnson', 29, 12345679, 'USA');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Hugo', 'Garcia', 34, 23456780, 'Mexico');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Luca', 'Moretti', 23, 34567891, 'Italy');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Saanvi', 'Sharma', 20, 45678902, 'India');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Ava', 'Nguyen', 32, 56789013, 'Vietnam');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Ethan', 'Chen', 26, 67890124, 'China');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Freya', 'Baker', 30, 78901235, 'Australia');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Nicolas', 'Leroy', 29, 89012346, 'France');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Jin', 'Park', 21, 90123457, 'South Korea');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('Isabella', 'Martinez', 27, 12345680, 'Colombia');
INSERT INTO persons (name, lastname, age, dni, country) VALUES ('David', 'Anderson', 35, 23456781, 'New Zealand');

