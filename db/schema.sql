DROP DATABASE IF EXISTS ares_dev;

CREATE DATABASE ares_dev;

\c ares_dev;



CREATE TABLE Missions (
    id INT SERIAL PRIMARY KEY, 
    earth_Date DATE NOT NULL,
    rover_Name TEXT NOT NULL,
    front_Camera TEXT,
    rear_Camera TEXT, 
    mast_Camera TEXT,
    picture BLOB,
    isFavorite BOOLEAN DEFAULT FALSE,
);
