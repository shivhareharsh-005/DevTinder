// create server

const express = require('express');
const app = express();
const connectDB = require('./config/database');

const User = require('./models/user');


app.use(express.json());

// signup users 
app.post('/signup', async(req, res)=>{
    const user = new User(req.body);
    try{
        await user.save();
    res.send("user created successfully");
    }
    catch(err){
        res.status(400).send("Error creating user" + err.message);
    }
})


app.get('/user', async(req, res)=>{
    const useremail = req.body.email;
    
    try{
        const users = await User.find({email : useremail});
        if(users.length === 0){
             res.status(404).send("user not found");
        } else {
            res.send(users);
        }
    } catch(err){
        res.status(404).send("something went wrong");
    }
})
//  feed api - get /feed - get all the users from the database

app.get('/feed', async(req, res)=>{
     try{
        const users = await User.find({});
        res.send(users);
     }
     catch{
        res.status(404).send("something went wrong");
     }
})

app.delete('/delete', async(req, res)=>{
    try{
        const result = await User.deleteOne({email : req.body.email});

        if(result.deletedCount === 0){
            return res.status(404).send("user not found ");
        }
        res.send("user deleted successfully");
    }
    catch(err){
        res.status(400).send("error" + error.message);
    }
})

app.patch('/update', async (req, res) => {
    try {
        const result = await User.updateOne(
            { firstName: "Ashok" },
            { $set: { ship: "raju" } }
        );

        res.send(result);
    } catch (err) {
        res.status(400).send("error");
    }
});


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
