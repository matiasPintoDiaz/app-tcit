CREATE DATABASE bdposts;

CREATE TABLE post(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion VARCHAR(255)
);