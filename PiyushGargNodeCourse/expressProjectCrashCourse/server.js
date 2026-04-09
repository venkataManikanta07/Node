const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON bodies - without this body will be undefined in POST and PUT requests
app.use("/api/contacts", require("./routes/contactRoutes"));

// Register error handling middleware AFTER routes so it can catch route errors
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
