const express = require("express")
const helmet = require("helmet")
const recipeRouter = require("../routes/dishRouter")


const server = express()

server.use(express.json())
server.use(helmet())
server.use("/api/dish",recipeRouter)



module.exports = server;