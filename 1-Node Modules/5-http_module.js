// http module helps to create a server application

// Require/Import the http Module
const http = require('http')

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
            res.write("<body><h2>Hi This is About Page</h2></body>")
            res.write("</html>")

            res.end()
        }
})

// Listen the server on a Port
server.listen(5000, ()=>{
    console.log("Node Server is Runnning on Port 5000 !!")
})