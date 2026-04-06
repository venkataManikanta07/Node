require("dotenv").config(); // this will load the environment variables from the .env file into process.env
const express = require("express");
const app = express();
const PORT = 4000;

const jwt = require("jsonwebtoken");

app.use(express.json()); // it lets us access the body of the request as json

let refreshTokens = []; // this will be an array that will store all the refresh tokens, generally it will be done in DB.

app.post("/token", (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401); // if there is no token, then we will return a 401 status code
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403); // if the token is not in the refreshTokens array, then we will return a 403 status code
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // if the token is invalid, then we will return a 403 status code
    const accessToken = generateAccessToken({ name: user.name }); // if the token is valid, then we will generate a new access token for the user and return it to them
    res.json({ accessToken: accessToken }); // we will return the new access token to the user
  });
});

app.delete("/logout", (req, res) => {
  refreshTokens = refreshTokens.filter((token) => token !== req.body.token); // when the user logs out, we will remove the refresh token from the refreshTokens array, so that it can no longer be used to generate new access tokens
  res.sendStatus(204); // we will return a 204 status code to indicate that the logout was successful and there is no content to return
});

app.post("/login", (req, res) => {
  // Authenticate the user first
  const userName = req.body.username; // we need to AUTHENTICATE and SERIALIZE the user before we can generate a token for them
  const user = { name: userName }; // this is the user object that we will be signing with

  const accessToken = generateAccessToken(user); // this will generate a token for the user that we have authenticated
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET); // this will generate a refresh token for the user that we have authenticated, we will be using the refresh token to generate a new access token when the access token expires
  refreshTokens.push(refreshToken); // we will be storing the refresh token in the refreshTokens array, so that we can verify it later when the user tries to generate a new access token using the refresh token
  return res.json({ accessToken: accessToken, refreshToken: refreshToken }); // The access token will have the user information saved inside of it.
});

function generateAccessToken(user) {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "15s" }); // we can also set an expiration time for the token, so that it will expire after a certain amount of time and the user will have to log in again to get a new token
}
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
