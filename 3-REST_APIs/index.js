// Requireing Modules
const express = require('express')
require('dotenv').config()

// Creating Express App
const app = express()

// Getting Port from Enviroment
const PORT = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Home Route
app.get("/", (req,res)=>{
    // res.send("<h2>This is a Demostration on REST-APIs")
    res.status(200).json({message:"This is a Demostration on REST-APIs"})
})

// API End Points
// 1. Get Method
app.get("/api/notes", (req,res)=>{
    res.status(200).json({message:"Fetching all Notes"})
})

// 2. Post Method
app.post("/api/notes", (req,res)=>{
    const data = {
        name:req.body.name,
        age:req.body.age
    }
    res.status(200).json({message:"Creating a new Note", data:data})
})

// 3. Put Method
app.put("/api/notes/:id",(req,res)=>{
    const noteID = req.params.id
    console.log(noteID)
      res.status(200).json({message:"Note updated",id:noteID})  
})
// 4. Delete Method
app.delete('/api/notes/:id',(req,res)=>{
    const noteId = req.params.id
    res.status(200).json({message:"Note Deleted", id:noteId})
})

app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})


// POSTMAN (Thirsd Party Tool)
// tunderclient(Extension of VS Code)