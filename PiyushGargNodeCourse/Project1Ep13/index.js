const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/user");

const PORT = 3000;

const { connectToMongoDB } = require("./connection");
const app = express();

app.use("/api/users", userRouter); // if any route comes under /api/users then it will be handled by the userRouter. The userRouter is defined in the routes/user.js file. It has the routes for creating a user, getting all users and getting a user by id.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectToMongoDB("mongodb://localhost:27017/youtube-app-1").then(() => {
  console.log("Connected to MongoDB");
});

//  With the user object / class we can perform CRUD operations on the users collection in the MongoDB database. We can create new user documents, read existing user documents, update user documents, and delete user documents using the methods provided by the Mongoose model.

app.use((req, res, next) => {
  console.log(`Inside the middleware 2 and the username is ${req.myUserName}`);
  next();
});

// If the path route has /api/users (the api is just a convention to indicate that this route is for the API)
// then we will return the users data in JSON format.

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
