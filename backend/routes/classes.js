const express = require("express")

const classGet = require("../controllers/classes/get")
const classGetRandom = require("../controllers/classes/getRandom")

const classRouter = express.Router()

classRouter.use("/getClass", classGet.getDefineClass)
classRouter.use("/getClassRandom", classGetRandom.getRandomClass)

module.exports = classRouter