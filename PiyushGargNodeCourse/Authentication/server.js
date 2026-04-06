require("dotenv").config(); // this will load the environment variables from the .env file into process.env
const express = require("express");
const app = express();
const PORT = 3000;

const jwt = require("jsonwebtoken");

app.use(express.json()); // it lets us access the body of the request as json

const posts = [
  {
    username: "Piyush",
    title: "Post 1",
  },
  {
    username: "Jim",
    title: "Post 2",
  },
  {
    username: "Alice",
    title: "Post 3",
  },
];

app.get("/posts", authenticateToken, (req, res) => {
  //   res.json(posts);
  console.log(req.user); // this will log the user information that we have saved in the request object in the authenticateToken middleware

  res.json(posts.filter((post) => post.username === req.user.name)); // we will only return the posts that belong to the user that is making the request
});


function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"]; // the token will be sent in the authorization header of the request
  const token = authHeader && authHeader.split(" ")[1]; // the token will be in the format
  if (token == null) return res.sendStatus(401); // if there is no token, then we will return a 401 status code

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // if the token is invalid, then we will return a 403 status code
    req.user = user; // if the token is valid, then we will save the user information in the request object and call the next middleware
    next();
  });
  // Bearer TOKEN - Is the format of the token that we will be sending in the authorization header
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
