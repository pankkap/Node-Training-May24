const mongoose = require('mongoose')

// 1. Schema of the model 
const notesSchema = new mongoose.Schema({
    title:String,
    body:String
})

// 2. Creating Model based on schema/ Collection inside MongoDB
const Note = mongoose.model("notes", notesSchema)

// 3. Export the Model
module.exports = Note
