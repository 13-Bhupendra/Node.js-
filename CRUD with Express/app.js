    import express from "express";
    const app = express();
    const port = 7000

    app.use(express.json());

    const Users = [
    {
        id: 1,
        name: "Aditya Thakur",
        email: "www.adithakur@gmail.com",
        password: "1234",
    },
    {
        id: 2,
        name: "Pratik Gupta",
        email: "www.pratikg@gmail.com",
        password: "1234",
    },
    {
        id: 3,
        name: "Vishal Tiwari",
        email: "www.vtiwari@gmail.com",
        password: "1234",
    },
    ];

    // get data
    app.get("/api/get" , (req ,res)=> {
        res.json(Users)
        res.send("Welcome to Express.js Server 🚀");
    });

    // get each user  data using URL Parameters 
    app.get("/user/:id" , (req , res)=> {
        const userID = req.params.id ;
        const user = Users.find((u)=> u.id == userID);
        if(user){
            res.json(user)
        }else{
            res.status(404).send("User not found !")
        }
    })

    // POST request using ->  Query Parameters 
    app.post("/api/post",(req,res)=>{
            Users.push(req.query);
            res.json(Users);
    })

    // PUT request using ->  Request Body
    app.put("/api/update/:id" , (req ,res )=> {
        const userID = req.params.id;
        const updatedData = req.body;

        const user = Users.find((u)=> u.id == userID);

        if(user){
            Object.assign(user , updatedData)
            res.json({
                message : "User details updated successful !",
                updatedUserDetails : user
            })
        }else{
            res.status(404).send("User not found !")
        }

    })


    // DELETE request using -> Query Parameters 
    app.delete("/api/delete" , (req ,res)=> {
        const userID = req.query.id ;
        const index = Users.findIndex((u)=>u.id == userID)
        if(index !== -1)
        {
        Users.splice(index , 1)
            res.json({
                message : "User delete successfully !",
                remainingData : Users
            })
        }else {
            res.status(404).send("User not found !")

        }
    })

    app.listen(port, ()=> {
        console.log("Server is ruuning at the PORT http://localhost:" + port);
    })