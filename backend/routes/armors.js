const express = require("express")

const armorGet = require("../controllers/armors/get")
const armorGetRandom = require("../controllers/armors/getRandom")

const armorRouter = express.Router()

armorRouter.use("/getArmor", armorGet.getDefineArmor)
armorRouter.use("/getArmorRandom", armorGetRandom.getRandomArmor)

module.exports = armorRouter