const express = require('express')
const router = express.Router()
const Note = require('../Model/notesModel')
const { fetchAllNotes, postNewNote, updateNote, deleteNote, fetchNote } = require('../Controller/noteController')

// API End Points

// 1. Get Method
router.get("/", fetchAllNotes)

// 2. Post Method
router.post("/", postNewNote)

// 3. Put Method
router.put("/:id",updateNote)

// 4. Delete Method
router.delete('/:id',deleteNote)

// 5. Fetch a Single Note
router.get("/:id", fetchNote)


// comman JS export 
module.exports = router