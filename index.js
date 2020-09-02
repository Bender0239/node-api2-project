const express = require('express')
const server = express()
const postsRouter = require("./posts/posts-router")

const port = 8000



server.use(express.json())

server.use("/api/posts", postsRouter)

server.listen(port, () => console.log("Server is up"))