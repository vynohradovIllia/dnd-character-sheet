const express = require("express")

const traitGet = require("../controllers/traits/get")
const traitGetRandom = require("../controllers/traits/getRandom")

const traitRouter = express.Router()

traitRouter.use("/getTrait", traitGet.getDefineTrait)
traitRouter.use("/getTraitRandom", traitGetRandom.getRandomTrait)

module.exports = traitRouter