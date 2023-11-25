const db = require("../db/dbConfig.js");

const getAllPhotos = async () => {
  try {
    const allPhotos = await db.any("SELECT * FROM photos");
    return allPhotos;
  } catch (error) {
    console.error("Error in getAllPhotos:", error)
    throw error;
  }
};

const getOnePhoto = async (id) => {
  try {
    const onePhoto = await db.one("SELECT * FROM Photos WHERE id=$1", id);
    return onePhoto;
  } catch (error) {
    console.error("Error in getOnePhoto:", error)
    throw error;
  }
};

module.exports = {
  getAllPhotos,
  getOnePhoto,
}