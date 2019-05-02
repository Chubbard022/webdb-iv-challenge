const express = require("express")
const helmet = require("helmet")

//const recipeRouter = require("../routes/")
//const dishRouter = require("../routes/")
//const ingredientRouter = require("../routes/")

const server = express()

server.use(express.json())
server.use(helmet())
//server.use("/api/dish",dishRouter)
//server.use("/api/recipe",recipeRouter)
//server.use("/api/ingredient",ingredientRouter)


module.exports = server;