const express = require("express");
const cors = require("cors");

const app = express();

const aresController = require("./controllers/aresController");

app.use(cors()); 
app.use(express.json());

app.use("/ares", aresController);

app.get("/", (req, res) => {
    res.send("Wecome to Ares.");
});

app.get("*", (req, res) => {
    res.status(404).json({success: false, data: {error: "Page is not found"} })
});

module.exports = app; 