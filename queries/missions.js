const db = require("../db/dbConfig.js");

const getAllMissions = async () => {
    try {
        const allMissions = await db.any("SELECT * FROM Missions");
        return allMissions;
    } catch (error) {
        console.error("Error in getAllMissions:", error);
        throw error;
    }
};

const getOneMission = async (id) => {
    try {
        const oneMission = await db.one("SELECT * FROM Missions WHERE id=$1", id);
        return oneMission;
    } catch (error) {
        console.error("Error in getOneMission:", error)
        throw error;
    }
};



module.exports = {
    getAllMissions,
    getOneMission,
};