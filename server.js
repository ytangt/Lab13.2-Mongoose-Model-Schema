const mongoose = require('mongoose')
const morgan = require('morgan')
const express = require('express')
require('dotenv').config();

const bookRoutes = require("./routes/bookRoutes")

const app = express()
app.use(express.json())
app.use(morgan("dev"))
const PORT = 4000

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB"))
    .then((err) => console.log(err))


app.get('/', (req, res) => {
    res.send("Welcome to our Book App")
})

app.use("/books", bookRoutes)

app.listen(PORT, ()=> {
    console.log(`Server is running on port: ${PORT}`)
})