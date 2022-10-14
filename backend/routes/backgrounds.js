const express = require("express")

const backgroundGet = require("../controllers/backgrounds/get")
const backgroundGetRandom = require("../controllers/backgrounds/getRandom")

const backgroundRouter = express.Router()

backgroundRouter.use("/getBackground", backgroundGet.getDefineBackground)
backgroundRouter.use("/getBackgroundRandom", backgroundGetRandom.getRandomBackground)

module.exports = backgroundRouter