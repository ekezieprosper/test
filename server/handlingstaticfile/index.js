const express = require("express")
const fs = require("fs")
const path = require("path")
const port = 5050

const app = express()

app.use(express.static("static"))
app.get("/",(req, res)=>{
    const filepath = path.join(__dirname, req.url)
    fs.exists(filepath, (fileExist)=>{
        if(fileExist){
            fs.readFile(filepath, "utf8", (error, data)=>{
                if(error){
                    res.status(500)
                    res.send("server error")
                }
                else{
                    res.status(200)
                    res.send(data)
                }
            })
        }else{
            res.send(404)
            res.send("file does not exist")
        }
    })
})


app.listen(port, ()=>{
    console.log(`server is active on : http://:${port}`)
})