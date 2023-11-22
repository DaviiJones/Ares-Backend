const db = require("../db/dbConfig.js");

const getAllMissions = async () => {
    try {
      const allMissions = await db.any("SELECT * FROM missions");
      return allMissions;
    } catch (error) {
      return error;
    }
  };

  const getOneMission = async (id) => {
    try {
      const oneMission = await db.one("SELECT * FROM Missions WHERE id=$1", id);
      return oneMission;
    } catch (error) {
      return error;
    }
  };
  
//   const createMission = async (Mission) => {
//     try {
//       const createdMission = await db.one(
//         "INSERT INTO Missions (name, artist, album, time, is_favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *",
        
//       );
//       return createdMission;
//     } catch (error) {
//       return error;
//     }
//   };
  
//   const deleteMission = async (id) => {
//     try {
//       const deletedMission = await db.one(
//         "DELETE FROM Missions WHERE id=$1 RETURNING *",
//         id
//       );
//       return deletedMission;
//     } catch (error) {
//       return error;
//     }
//   };
  
//   const updateMission = async (id, Mission) => {
//     try {
//       const updatedMission = await db.one(
//         "UPDATE Missions SET name=$1, artist=$2, album=$3, time=$4, is_favorite=$5 WHERE id=$6 RETURNING *",
//         [Mission.name, Mission.artist, Mission.album, Mission.time, Mission.is_favorite, id]
//       );
//       return updatedMission;
//     } catch (error) {
//       return error;
//     }
//   };
  
  module.exports = {
    getAllMissions,
    createMission,
    getOneMission,
    deleteMission,
    updateMission,
  };