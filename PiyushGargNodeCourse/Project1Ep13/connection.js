const mongoose = require("mongoose");

// Connection to MongoDB using Mongoose
async function connectToMongoDB(url) {
  try {
    return await mongoose.connect(url);  
    console.log("Connected to MongoDB");
    } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    }
}


module.exports = {connectToMongoDB};