// Requireing Modules
const express = require('express')
require('dotenv').config()
const notesRouter = require('./Routes/notesRoutes')
const mongoose = require('mongoose')
const cors = require('cors')

// Creating Express App
const app = express()

// Getting Port from Enviroment
const PORT = process.env.PORT || 5000
const DB_URL = process.env.MONGODB_URL
// console.log(DB_URL)

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/api/notes",notesRouter)

app.use(cors())

// Home Route
app.get("/", (req,res)=>{
    // res.send("<h2>This is a Demostration on REST-APIs")
    res.status(200).json({message:"This is a Demostration on REST-APIs"})
})

// Connection with DB(MongoDB Atlas)
mongoose
.connect(DB_URL)
.then(()=>console.log("Database connected..!!"))
.catch(()=>console.log("Database not connected..!!"))



app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})

