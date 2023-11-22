const checkEarthDate = (req, res, next) => {
    if (req.body.earthDate) {
        console.log("earthDate is valid")
        next()
    } else {
        res.status(400).json({ error: "earthDate is required" })
    }
}

const checkRoverName = (req, res, next) => {
    if (req.body.roverName) {
        console.log("roverName is good")
        next()
    } else {
        res.status(400).json({ error: "roverName is required" })
    }
}



const checkFrontCamera = (req, res, next) => {
    if (typeof req.body.frontCamera === 'string' || req.body.frontCamera == undefined) {
        console.log("frontCamera test passed")
    } else {
        res.status(400).json({ error: "frontCamera is the wrong data type" })
    }
}

const checkRearCamera = (req, res, next) => {
    if (typeof req.body.rearCamera === 'string' || req.body.rearCamera == undefined) {
        console.log("rearCamera test passed")
    } else {
        res.status(400).json({ error: "rearCamera is the wrong data type" })
    }
}

const checkMastCamera = (req, res, next) => {
    if (typeof req.body.mastCamera === 'string' || req.body.mastCamera == undefined) {
        console.log("mastCamera test passed")
    } else {
        res.status(400).json({ error: "mastCamera is the wrong data type" })
    }
}


const checkPicture = (req, res, next) => {
    if (req.body.picture === true || req.body.picture === false) {
        console.log("picture is good")
        next()
    } else {
        res.status(400).json({ error: "picture must be a boolean value" })
    }
}

const checkBoolean = (req, res, next) => {
    if (req.body.is_favorite === true || req.body.is_favorite === false) {
        console.log("boolean is good")
        next()
    } else {
        res.status(400).json({ error: "is_favorite must be a boolean value" })
    }
}