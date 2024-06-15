const Note = require("../Model/notesModel")

// 1. Fetch all notes from DB
const fetchAllNotes = async (req,res)=>{
    // 1. Get data from MongoDB
    const notes = await Note.find({})
    // Note: Reading from Database will take extra time and because it is 
    // asynchronous operation, the next line of code executed immidieatly
    // so, here we need to implement the concept of async-await
    
    // 2. Send response back to user
    res.status(200).json({message:"Fetching all Notes",notes:notes})
}

// 2. Post New Note
const postNewNote = async(req,res)=>{
    // 1. get the data to push into the database
    const note = {
        title:req.body.title,
        body:req.body.body
    }
    // 2. Store data in the Database
    await Note.create(note)         // Write Operation

    // 3. Send Response back to user
    res.status(200).json({message:"Creating a new Note", note:note})
}

// 3. Update a Note
const updateNote = async(req,res)=>{
    // 1. Get the Id from the Request Parameter
    const noteID = req.params.id
    
    // 2. Update the data (You have to take updated Data) 
    const updatedData = {
        title:req.body.title,
        body:req.body.body
    }
    // 3. Update Data into the Database
    await Note.findByIdAndUpdate(noteID, updatedData)     // Write Operation

      res.status(200).json({message:"Note updated",noteId:noteID })  
}

//4. Delete a Note
const deleteNote = async(req,res)=>{
    // 1. Get the Id from the Request Parameter
    const noteId = req.params.id

    // 2. Delete data in the Database
    await Note.findByIdAndDelete(noteId)  // Read Operation

    res.status(200).json({message:"Note Deleted", id:noteId})
}

// 5. Fetch a Single Note
const fetchNote = async (req,res)=>{

    // 1. Get the Id from the Request Parameter
    const noteId = req.params.id

    // 2. Get the data from MongoDB using the id 
    const note = await Note.findById(noteId) // read Operation

    // 3. Send response back to user
    res.status(200).json({message:"Fetching Single Note",note:note})
}

module.exports = {fetchAllNotes, postNewNote, fetchNote, deleteNote, updateNote}