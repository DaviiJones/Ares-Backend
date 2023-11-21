DROP DATABASE IF EXISTS ares_dev;

CREATE DATABASE ares_dev;

\c ares_dev;



CREATE TABLE marsMission (
    id SERIAL PRIMARY KEY, 
    earthDate DATE NOT NULL,
    roverName TEXT NOT NULL,
    frontCamera TEXT,
    rearCamera TEXT, 
    mastCamera TEXT,
    picture LONGBLOB,
    isFavorite BOOLEAN,
);
