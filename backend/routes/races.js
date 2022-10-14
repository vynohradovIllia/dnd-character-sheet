const express = require("express")

const raceGet = require("../controllers/races/get")
const raceGetRandom = require("../controllers/races/getRandom")

const raceRouter = express.Router()

raceRouter.use("/getRace", raceGet.getDefineRace)
raceRouter.use("/getRaceRandom", raceGetRandom.getRandomRace)

module.exports = raceRouter