const express = require("express")
const port = 3333
const app = express()

app.get("/", (req, res)=>{
    res.send("God bless my hustle")
})

app.listen(port,()=>{
    console.log(`server is active on ${port}`);
})


