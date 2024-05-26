// http module helps to create a server application

// Require/Import the http Module
const http = require('http')
const fs = require('fs')
const path = require('path')

// Creating a server Object
const server = http.createServer((req,res)=>{
    // console.log("This is Server")
    const url = req.url
    // console.log(url)
    if(url == "/")
        {
            res.write("Hi Welcome to Node Server")
            res.write("\n I am Home Page")
            res.end()
        }
    if(url=="/about")
        {
            res.write("<html>")
            res.write("<head><title>About Page</title></head>")
            res.write("<body><h2 style='color:red'>This is an About Page</h2>")
            res.write("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin consectetur egestas lacus ut condimentum. Phasellus tincidunt mauris et nulla vehicula, sed lacinia tortor molestie. Suspendisse finibus ut nisi at consequat. Vivamus at eros ac massa tincidunt viverra. Ut id lorem mauris. Quisque id nisi in justo convallis sagittis. Nullam eu ipsum sed ligula feugiat finibus quis non nunc. In non porttitor urna, non efficitur libero. Integer cursus, lorem vel consequat finibus, tortor enim condimentum est, vel iaculis dolor lacus nec nulla. Nunc sed tristique orci.</p> ")
            res.write("</body>")
            res.write("</html>")

            res.end()
        }
        if(url=="/contact")
            {
                const file = fs.readFileSync(path.join(__dirname, "contact.html"), "utf-8")
                res.write(file)
                res.end()
            }
        else{
            res.write("404 Page not Found")
            res.end()
        }   
})

// Listen the server on a Port
server.listen(5000, ()=>{
    console.log("Node Server is Runnning on Port 5000 !!")
})