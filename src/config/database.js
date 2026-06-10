
const mongoose = require('mongoose');

const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://shivhareharsh027_db_user:alaIhI6WE6QFt5jL@namastenodw.huayrwl.mongodb.net/devTinder");
}

module.exports = (connectDB);