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
