const express = require("express");
const users = require("./MOCK_DATA.json");
const PORT = 3000;
const fs = require("fs");
const mongoose = require("mongoose");
const { type } = require("os");
const { time } = require("console");

const app = express();

// Connection to MongoDB using Mongoose
mongoose
  .connect("mongodb://localhost:27017/youtube-app-1")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Inside middleware: ${req.method} ${req.url}`);
  req.myUserName = "Piyush Garg";
  next();

  // return res.json({message: "This is a middleware response"});
});

// Schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    jobTitle: {
      type: String,
    },
    gender: {
      type: String,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("user", userSchema);

//
app.post("/api/users", async (req, res) => {
  const body = req.body;
  if (
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.jobTitle ||
    !body.gender
  ) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    jobTitle: body.jobTitle,
    gender: body.gender,
  });

  return res.json({
    status: 201,
    message: "User created successfully",
    data: result,
  });
});

app.get("/usersDB", async (req, res) => {
  const allUsers = await User.find({});
  const html = `
  <ul>
    ${allUsers
      .map(
        (user) =>
          `<li>${user.firstName} ${user.lastName} - ${user.email} - ${user.jobTitle} - ${user.gender}</li>`,
      )
      .join("")}
  </ul>
  `;
  res.send(html);
});

app.get("/usersDB/:id", async (req, res) => {
  const id = Number(req.params.id);
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  const html = `
    <h1>${user.firstName} ${user.lastName}</h1>
    <p>Email: ${user.email}</p>
    <p>Job Title: ${user.jobTitle}</p>    
    <p>Gender: ${user.gender}</p>
  `;
  res.send(html);
});

//  With the user object / class we can perform CRUD operations on the users collection in the MongoDB database. We can create new user documents, read existing user documents, update user documents, and delete user documents using the methods provided by the Mongoose model.

app.use((req, res, next) => {
  console.log(`Inside the middleware 2 and the username is ${req.myUserName}`);
  next();
});

app.use((req, res, next) => {
  fs.writeFile(
    "middleware.txt",
    `This is the middleware file created at ${new Date()} and route is ${req.url}`,
    (err) => {
      if (err) {
        console.error("Failed to write middleware file:", err);
      }
      next();
    },
  );
});

app.get("/users", (req, res) => {
  res.json(users);
});

// If the path route has /api/users (the api is just a convention to indicate that this route is for the API)
// then we will return the users data in JSON format.

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// const app = express(); - creates an instance of the express application. This instance is used to define routes and middleware for the application.

// app.use(express.urlencoded({ extended: true })); - This line of code is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property. The extended option allows for rich objects and arrays to be encoded into the URL-encoded format, which can be useful for complex data structures.

/**
 * MIDDLEWARE:
 * - MOre of a middleman, it is a function that has access to the request and response objects, and can modify them or perform some operations before passing control to the next middleware or route handler.
 * - MIDDLEWARE does PROCESSING.
 * - Middleware takes the request and response objects, and can perform operations such as logging, authentication, or data parsing before passing control to the next middleware or route handler.
 *
 * - MIDDLEWARE IS THE FUNCTION THAT HAVE ACCESS TO THE REQUEST OBJECT , RESPONSE OBJECT AND THE NEXT FUNCTION IN THE APPLICATION'S REQUEST-RESPONSE CYCLE. THE NEXT FUNCTION IS A FUNCTION IN THE EXPRESS ROUTER WHICH, WHEN INVOKED, EXECUTES THE NEXT MIDDLEWARE OR ROUTE HANDLER IN THE STACK.
 * - MIDDLEWARE EXAMPLE: app.use(express.urlencoded({ extended: true })) - This line of code is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property. The extended option allows for rich objects and arrays to be encoded into the URL-encoded format, which can be useful for complex data structures.
 */
