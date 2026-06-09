// create server

const express = require('express');

const app = express();

app.get(
    '/user',
    (req,res, next)=>{
        console.log("responce 1 console")
        next();
    },
    (req, res, next)=>{
        console.log("responce 2 console");
        res.send("responce 2");
        next();
    },
    (req, res )=>{
        console.log("responce 3 console");
        res.send("responce 3");
    }
)





app.listen(7777,()=>{
    console.log("server is running on port 7777");
})