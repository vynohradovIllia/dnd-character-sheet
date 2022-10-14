const express = require("express")

const app = express()
const userRouter = require("./routes/users")

app.use("/users", userRouter)

app.use((error, req, res, next) => {
    console.log(error)
    res.status(404).send("Not Found")
})

app.listen(5000, () => {
    console.log("Server is running on port 5000");
})