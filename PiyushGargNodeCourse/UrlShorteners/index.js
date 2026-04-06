const express = require("express");
const app = express();
const port = 8000;
const urlRoute = require("./routes/url");
const { connectToDb } = require("./connect");
const { connect } = require("mongoose");
const URL = require("./models/url");
const path = require("path");

const userRoutes = require("./routes/user");
app.use("/user", userRoutes);

connectToDb("mongodb://localhost:27017/short-url")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log("Error connecting to DB", err);
  });

app.set("view engine", "ejs");
app.set("views", path.resolve("./views")); // Set the views directory
app.use(express.json()); // Middleware to parse JSON bodies

app.use("/url", urlRoute);
app.get("/test", (req, res) => {
  res.render("home");
});
app.get("/:shortId", async (req, res) => {
  const shortID = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId: shortID,
    },
    {
      $push: {
        visitedHistory: {
          timeStamp: Date.now(),
        },
      },
    },
  );
  res.redirect(entry.URL);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
