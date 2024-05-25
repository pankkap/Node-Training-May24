const path = require('path')

// the location of current working director
console.log(__dirname)

// the complete location of current file
console.log(__filename)

// to find the location of any file
console.log(path.join(__dirname, "MyContent.txt"))