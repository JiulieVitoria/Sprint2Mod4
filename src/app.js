import express from "express"

import database from "./database.js"

import controller from "./controller/controller.js"

const port = 3000

const app = express()

app.use(express.json())

controller(app, database)

app.listen(port, () => {

    console.log(`http://localhost:${port}`)

})