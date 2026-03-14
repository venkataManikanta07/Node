const express = require("express");
const users = require("./MOCK_DATA.json"); 
const PORT = 3000;

const app = express();

app.get("/users", (req, res) => {
    res.json(users);
})

// If the path route has /api/users (the api is just a convention to indicate that this route is for the API) 
// then we will return the users data in JSON format.


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});



// const app = express(); - creates an instance of the express application. This instance is used to define routes and middleware for the application.

// app.use(express.urlencoded({ extended: true })); - This line of code is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property. The extended option allows for rich objects and arrays to be encoded into the URL-encoded format, which can be useful for complex data structures.