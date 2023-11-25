const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
const axios = require('axios');

const missionController = express.Router();

missionController.use(bodyParser.json());
missionController.use(cors());

const apiKey = 'YOUR_NASA_API_KEY';

missionController.get("/photos", async (req, res) => {
    try {
        const earthDate = req.query.earthDate;
        const roverName = req.query.roverName;

        const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?earth_date=${earthDate}&api_key=${apiKey}`;
        
        const response = await axios.get(apiUrl);
        const photosData = response.data.photos;

        if (photosData.length > 0) {
            const resultsToMap = photosData.slice(0, 10);
            const mappedResults = resultsToMap.map(photo => photo.img_src);

            res.status(200).json({ mappedResults });
        } else {
            res.status(404).json({ error: 'No photos found for the given parameters' });
        }
    } catch (error) {
        console.error('Error fetching Mission photos:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = missionController;
