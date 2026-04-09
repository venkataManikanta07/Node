const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/blogify").then(() => {
  console.log("Connected to MongoDB");
});

app.use(express.urlencoded({ extended: true })); // This middleware is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property. It is particularly useful for parsing form data sent via POST requests. By setting extended: true, you can parse nested objects and arrays in the request body, allowing for more complex data structures to be handled effectively.
app.use(express.static(path.resolve("./public"))); // This middleware is used to serve static files such as images, CSS files, and JavaScript files. By specifying the directory (in this case, "./public"), you can make those files accessible to clients when they request them. For example, if you have an image file named "logo.png" in the "public" directory, it can be accessed via the URL "/logo.png". This is essential for serving assets that are part of your web application.

const userRoute = require("./routes/user");
app.set("view engine", "ejs"); // I will use EJS to render HTML templates
app.set("views", path.resolve("./views"));

app.get("/", (req, res) => {
  res.render("home"); // make sure homepage.ejs exists
});

app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
