// Require the Library
const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 5000


// Create a Server App
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to Express JS Server")
})
app.get('/about',(req,res)=>{
    res.send("<h1>This is About Page</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h1>This is contact Page</h1>")
})
app.get('*',(req,res)=>{
    res.send("<h1>Page not found!! Error! </h1>")
})


// Listen App on a port
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})