const fs = require('fs')
const path = require('path')
const myError = new Error("Something went wrong");
// console.log(myError)

try
{
    let fileData  = fs.readFileSync(path.join(__dirname, "files" ,'MyContent.txt'),"utf-8")
    console.log(fileData)
}
catch(error)
{
    console.log(error.message)
}
const url = require('url')
let address = "http://localhost:8080/default.htm?year=2017&month=february"


try{
    throw new Error("I am throwing an error")
    console.log(url.parse(address))
}
catch(error){
    console.log(error)
}

try
{
    let res  = fetch('address')
    if(res)
        {
            console.log(res)
        }
    else
    {
        throw new Error("No Response recieved")
    }    
}
catch(err)
{
    console.log(err.message)
}
