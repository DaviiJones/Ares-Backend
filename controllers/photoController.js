const express = require("express");

const {
    getAllPhotos,
} = require("../queries/songs.js");

const photos = express.Router();

photos.get("/", async (req,res)=>{
    const allPhotos = await getAllPhotos();

    if (allPhotos[0]) {
        res.status(200).json(allPhotos);
    } else {
        res
            .status(500)
            .json({
                success: false,
                data: { error: "Server Error - Photos not Uploaded!" },
            });
    }
})

photos.get("/:id", async (req, res) => {
    const { id } = req.params;
    const onePhoto = await getOnePhoto(id);

    if (onePhoto.id) {
        res.status(200).json(onePhoto);
    } else {
        res.status(404).json("Photo not Found");
    }
});

module.exports = photos