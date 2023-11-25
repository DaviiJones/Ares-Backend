DROP DATABASE IF EXISTS ares_dev;

CREATE DATABASE ares_dev;

\c ares_dev;



CREATE TABLE Missions (
    id SERIAL PRIMARY KEY, 
    earth_Date DATE NOT NULL,
    rover_Name TEXT NOT NULL,
    front_Camera BLOB,
    rear_Camera BLOB, 
    mast_Camera BLOB,
    is_Favorite BOOLEAN DEFAULT FALSE,
);

CREATE TABLE Photos (
    id SERIAL PRIMARY KEY,
    title TEXT,
    details TEXT,
    is_Favorite BOOLEAN DEFAULT FALSE,
)

