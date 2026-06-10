// create server

const express = require('express');
const app = express();
const connectDB = require('./config/database');

const User = require('./models/user');

app.post('/signup', async(req, res)=>{
    const user = new User({
        firstName: "Himanshu",
        lastName: "Shivhare",
        email: "shivharehimanshu@gmail.com",
        password: "himanshu@123"
    })
    try{
        await user.save();
    res.send("user created successfully");
    }
    catch(err){
        res.status(400).send("Error creating user" + err.massage);
    }
})

connectDB()
.then(()=>{
    console.log("database connected successfully");
    app.listen(7777, ()=>{
        console.log("server is running on port 7777");
    })
})
.catch((err)=>{
    console.error("Error connecting to database:", err);
});
