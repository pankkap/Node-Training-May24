//1. requiring mongoose
const mongoose = require('mongoose')

//2. create a connection with DB
mongoose.connect("mongodb://localhost:27017/Users")
.then(()=>console.log("connection with DB Successfull...!!"))
.catch(()=>console.log("Error with connection with DB!!"))

//3. Creating a Schema
const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String}
})

//4. Create a Model used for Collection
const UserModel = new mongoose.model("RegisteredUsers", userSchema)

//5. Creating static Data for DB using Model
const data = UserModel({
    name:"TestName",
    email:"testname@abc.com",
    password:"test124"
})

// 6. Storing data into DB
data
.save()
.then(()=>console.log("Data inserted into DB"))
.catch(()=>console.log("error"))

