const fs = require("fs")
const data = "i've been researching on write stream since morning"

const MywriteStream = fs.createWriteStream("test.txt")

MywriteStream.write(data, 'utf8')
MywriteStream.end()

MywriteStream.on('finish',()=>{
    console.log("last last i don finish am")
})
