const http = require("http");
const fs = require("fs");
const path = require("path");

// const server = http.createServer((req , res)=>{
//     if(req.url === "/")
//     {
//         res.writeHead(200,{"content-type" : "text/plain"})
//         res.end("home page !")
//     }else if(req.url === "/about")
//     {
//         res.writeHead(200,{"content-type" : "text/plain"});
//         res.end("About Page");
//     }
//     else if (req.url === "/contact")
//     {
//         res.writeHead(200 , {"content-type" : "text/plain"});
//         res.end("contact page");
//     }
//     else{
//         res.writeHead(404 , {"content-type" : "text/plain"});
//         res.end("404 Page not found !");
//     }
// });

const server = http.createServer((req, res) => {

  const logPath = path.join(__dirname , "logs" , "server.log");
  const date = new Date()
  const logsEnter = `${date.toLocaleString()}-${req.url}\n`

  fs.appendFile(logPath , logsEnter ,(err)=>{
    if(err){
      console.log("Error ! " , err)
    }
  })

  let filepath = "";

  if (req.url === "/") {
    filepath = path.join(__dirname, "pages" ,  "index.html");
  } else if (req.url === "/about") {
    filepath = path.join(__dirname,"pages" , "about.html");
  } else if (req.url === "/contact") {
    filepath = path.join(__dirname,"pages" , "contact.html");
  } else {
    filepath = path.join(__dirname, "pages" , "404.html");
  }

  fs.readFile(filepath, (err, data) => {
    if (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end("server error!");
    } else {
      res.writeHead(200, { "content-type": "text/html" });
      res.end(data);
    }
  });
});
server.listen(4000, () => {
  console.log("server is running at http://localhost:4000");
});
