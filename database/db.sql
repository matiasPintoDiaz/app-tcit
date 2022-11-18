CREATE DATABASE bdposts;

CREATE TABLE post(
    id VARCHAR(255) PRIMARY KEY,
    nombre VARCHAR (255) UNIQUE,
    descripcion VARCHAR (255)
);