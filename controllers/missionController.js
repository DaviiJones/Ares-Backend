const express = require("express");
const {
    getAllMissions,
    createMission,
    getOneMission,
    deleteMission,
    updateMission,
} = require("../queries/songs.js");


const missions = express.Router();

songs.get("/", async (req, res) => {
    const allMissions = await getAllMissions();

    if (allMissions[0]) {
        res.status(200).json(allMissions);
    } else {
        res
            .status(500)
            .json({
                success: false,
                data: { error: "Server Error - Missions not Uploaded!" },
            });
    }
});


songs.get("/:id", async (req, res) => {
    const { id } = req.params;
    const oneMission = await getOneMission(id);

    if (oneMission.id) {
        res.status(200).json(oneMission);
    } else {
        res.status(404).json("Mission not Found");
    }
});

songs.post("/", async (req, res) => {
    try {
        const createMission = await createMission(req.body);
        res.status(200).json(createMission);
    } catch (error) {
        res.status(400).json({ error: "There was an error" });
    }
});

songs.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMission = await deletedMission(id);

        if (deletedMission.id) {
            res.status(200).json(deletedMission);
        } else {
            res.status(404).json("No mission at that id");
        }
    } catch (error) {
        res.send(error);
    }
});

songs.put("/:id", async (req, res) => {
    const { id } = req.params;
    const updatedMission = await updatedMission(id, req.body);

    if (updatedMission.id) {
        res.status(200).json(updatedMission);
    } else {
        res.status(404).json("No mission at that id");
    }
});

module.exports = missions