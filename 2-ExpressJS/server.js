// we have to require all the dependencies
const express = require('express')
const path  = require('path')
require('dotenv').config()

//1. requiring mongoose
const mongoose = require('mongoose')

//2. create a connection with DB
mongoose.connect("mongodb://localhost:27017/Users")
.then(()=>console.log("connection with DB Successfull...!!"))
.catch(()=>console.log("Error in connection with DB!!"))


// Create a Server
const app = express()

const PORT = process.env.PORT || 5000

// Making public folder as static resouces
// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req,res)=>{ 
    res.sendFile(path.join(__dirname, "register.html"))
})
app.post('/', (req,res)=>{ 
    let myData = req.body
    console.log(myData)

    // Storing data in Database(MongoDB)
   
    //3. Creating a Schema (structure of data to be store)
    const userSchema = new mongoose.Schema({
        name:{type:String, required:true},
        email:{type:String, required:true},
        password:{type:String}
    })

    //4. Create a Model used for Collection
    let UserModel
    try {
        UserModel = mongoose.model('RegisteredUsers')
    } catch (error) {
        UserModel = mongoose.model('RegisteredUsers',userSchema)
    }

    //5. Creating static Data for DB using Model
    const data = UserModel({
        name: myData.username,
        email:myData.email,
        password:myData.password
    })

    // 6. Storing data into DB
    data
    .save()
    .then(()=>console.log("Data inserted into DB"))
    .catch(()=>console.log("error"))

    // 7. Get data from MonngoDb and display here in Server
    UserModel
    .find()
    .then((data)=>console.log(data))
    .catch(()=>console.log("error"))



    res.json({"success":true})
})





app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})


