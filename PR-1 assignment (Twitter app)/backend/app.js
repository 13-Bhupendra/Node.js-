import express from 'express'
import cors from "cors"
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()
const Port = 7000;

app.use(express.json())
app.use(cors())

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const filePath = path.join(__dirname , "data" , "tweet.json")
const logsPath = path.join(__dirname , "logs" , "server.log") 

// Middleware implement
// app.use((req, res ,next)=>{
//     const date = new Date().toLocaleDateString();
//     const time = new Date().toLocaleTimeString();
    
//     const log = `Server Requested ${req.method} on PORT http://localhost:7000/${req.url} at ${date} ${time}\n`;
//   fs.appendFileSync(logsPath, log, { encoding: "utf8" });
//     next()
// })


// data fetch
app.get("/api/get" , (req , res)=>{
    const jsonData = fs.readFileSync(filePath , "utf8")
    const data = JSON.parse(jsonData);
    res.json(data)  
})


// Post req
app.post("/api/posts" , (req ,res)=>{
    const newTweet = req.body
    const jsonData = fs.readFileSync(filePath , "utf8")
    const data = JSON.parse(jsonData);

    // newTweet.date = new Date().toLocaleDateString()
    // newTweet.time = new Date().toLocaleTimeString()
    
    data.push(newTweet)
    fs.writeFileSync(filePath , JSON.stringify(data))
    res.json(data)
})


//delete req
app.delete("/api/delete/:id" , (req ,res)=>{
    const id = parseInt(req.params.id)

    const jsonData = fs.readFileSync(filePath , "utf8")
    const data = JSON.parse(jsonData);
    const index = data.findIndex((t)=> t.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Tweet not found" });
    }

    data.splice(index , 1)
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.json({ message: "Deleted successfully",  remainingData : data });
})


app.put("/api/update/:id" , (req,res)=>{
    const id =parseInt(req.params.id)
    const updatedData  = req.body

    const jsonData = fs.readFileSync(filePath , "utf8")
    const data = JSON.parse(jsonData);
    const tweet = data.find((t)=> t.id === id);

    if(tweet){
        Object.assign(tweet  , updatedData)
        fs.writeFileSync(filePath, JSON.stringify(data));

        res.json({
            message: "tweet data updated successfully!",
            updatedTweet: tweet
        })
    }else {
        res.status(404).send("Tweets not found!");
    }

})

app.listen(Port , ()=>{
    console.log("Server is running at PORT http://localhost:" + Port);
})