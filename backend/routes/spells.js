const express = require("express")

const spellGet = require("../controllers/spells/get")
const spellGetRandom = require("../controllers/spells/getRandom")

const spellRouter = express.Router()

spellRouter.use("/getSpell", spellGet.getDefineSpell)
spellRouter.use("/getSpellRandom", spellGetRandom.getRandomSpell)

module.exports = spellRouter