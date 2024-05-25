
const url = require('url')
let address = "http://localhost:8080/default.htm?year=2017&month=february"

let urlContent = url.parse(address, true)
console.log(urlContent)


// Hostname
console.log(urlContent.hostname)

// Get Query
console.log(urlContent.query)
let queryData = urlContent.query

console.log(`Year: ${queryData.year}`)
console.log(`Month: ${queryData.month}`)