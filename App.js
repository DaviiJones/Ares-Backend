const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const axios = require('axios')


const App = express();

app.use(bodyParser.json());


app.use(cors()); 

app.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-7-3&api_key=wHxOOM47lL3MkYEoxYhDLwR4fr20UfeMenMR67VB", (req, res) => {
    res.send("Wecome to Ares.");
});

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "Page is not found"} })
});

module.exports = App; 