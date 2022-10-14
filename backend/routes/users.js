const express = require("express")

const userGet = require("../controllers/users/get")
const userPost = request("../controllers/users/post")
const userDelete = require("../controllers/users/delete")

const userRouter = express.Router()

userRouter.use("/addUser", userPost.addUser)
userRouter.use("/deleteUser/:id", userDelete.deleteUser)
userRouter.use("/getUser", userGet.getUsers)

module.exports = userRouter