const express = require("express")

const itemGet = require("../controllers/items/get")
const itemGetRandom = require("../controllers/items/getRandom")

const itemRouter = express.Router()

itemRouter.use("/getItem", itemGet.getDefineItem)
itemRouter.use("/getItemRandom", itemGetRandom.getRandomItem)

module.exports = itemRouter