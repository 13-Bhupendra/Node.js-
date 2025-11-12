import express from "express"
import fs from 'fs'
// import path from "path";
import { fileURLToPath } from "url"

const app = express()

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__dirname)
// const filePath = path.join(__dirname , "public")


app.use(express.static("public"));

app.get("/" , (req ,res)=>{
    console.log("page loaded ....");
    res.send("Home page");
})

app.listen(7000 , ()=>{
    console.log("server started....");
})
