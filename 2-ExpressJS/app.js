// Require the Library
const express = require('express')
require('dotenv').config()
const path = require('path')



const PORT = process.env.PORT || 5000


// Create a Server App
const app = express();

// Install  body-parser Library for handling json data
//Middleware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.get('/',(req,res)=>{
    res.send("<a href='/register'>Register User</a>")
})
app.get('/about',(req,res)=>{
    res.send("<h1>This is About Page</h1>")
})
app.get('/contact',(req,res)=>{
    res.send("<h1>This is contact Page</h1>")
})
app.get("/register", (req,res)=>{
    res.sendFile(path.join(__dirname, 'register.html'))
})
app.post ("/register",(req,res)=>{
    // Recieve User Input Data
    const data  = req.body
    console.log(data) // Error: undefined because of Server not able to handle json forma
    // use express Middleware to handle JSON data

    // res.send("<h1>Thanks Your Account has been Created</h1>")
    // res.send(`<h1>Thanks ${req.body.username} Your Account has been Created Sucessfully. </h1>
    // <p>Your Email Id: ${req.body.email}
    // `)
    res.json({
        "sucess":true,
        "data":data
    })

})
// * route should be at the end of all Routes
app.get('*',(req,res)=>{
    res.send("<h1>Page not found!! Error! </h1>")
})



// Listen App on a port
app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})