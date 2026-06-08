// create server

const express = require('express');

const app = express();

app.use("/hello", (req, res)=>{
    res.send("hello world from /hello");
})



app.get("/user", (req, res)=>{
    res.send("hello get from user");
})

app.post("/user", (req, res)=>{
    res.send("hello post from user");
})

app.delete("/user", (req, res)=>{
    res.send("hello delete")
})

app.patch("/user", (req,res)=>{
    res.send("hello patch");
})


app.use("/test", (req, res)=>{
    res.send("hello world from /test");
})

app.listen(7777,()=>{
    console.log("server is running on port 7777");
})