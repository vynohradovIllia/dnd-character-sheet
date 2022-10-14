const express = require("express")

const weaponGet = require("../controllers/weapons/get")
const weapomGetRandom = require("../controllers/weapons/getRandom")

const weaponRouter = express.Router()

weaponRouter.use("/getWeapon", weaponGet.getDefineWeapon)
weaponRouter.use("/getArmorRandom", weapomGetRandom.getRandomWeapon)

module.exports = weaponRouter