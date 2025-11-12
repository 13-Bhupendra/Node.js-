//Create a new file and write some text inside it. (using FS module)
//Read the content of a file and display it in the console.
// Append new content to an existing file.

const fs = require("fs")

fs.writeFileSync("note.html" , "<html><head></head> <body> <h2>Welcome to Node.js Part-I . Assignment first of node.js.</h2></body></html>" )

const data  = fs.readFileSync("note.html" , "utf8")
console.log(data)
fs.appendFileSync("note.html" , "<!--=====added new content using append..======.-->")



//Get the absolute path of the current file using the path module.
// Display only the file name and its extension using the path module.

const path = require("path")

console.log(path.dirname(__filename))
console.log(path.extname(__filename))