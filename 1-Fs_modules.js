// FS-Node Module - Used to access local File System
// CommonJS Based- require()

const fs = require('fs')
const path = require('path')

// Writing into the File
fs.writeFileSync('content.txt', 'Hi Friends, I am using InBuilt FS Module of Node Js for reading and writing into the File')
fs.writeFileSync("content.txt","Hello Friends")


// Appending new content into existing file
fs.appendFileSync('content.txt', "\n Hi I am using Fs module of NodeJS")

// Reading content from a File
let FileData = fs.readFileSync('content.txt')
// console.log(FileData)
// console.log(FileData.toString())

// Read content of file in Human readable format\
let FileData1 = fs.readFileSync('content.txt', "utf-8")
console.log(FileData1)

// Rename a file
fs.renameSync('content.txt','MyContent1.txt')

// Delete a file
const filePath = path.join(__dirname, "files","MyContent.txt")
fs.unlinkSync(filePath)