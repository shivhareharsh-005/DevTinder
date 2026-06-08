// create server

const express = require('express');

const app = express();

app.use("/hello", (req, res)=>{
    res.send("hello world from /hello");
})

app.use("/", (req, res)=>{
    res.send("hello world");
})


app.use("/test", (req, res)=>{
    res.send("hello world from /test");
})

app.listen(7777,()=>{
    console.log("server is running on port 7777");
})