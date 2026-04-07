const path = require("path");
const express = require("express");
const multer = require("multer");

const app = express();
const upload = multer({ dest: "uploads/" });

const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  return res.render("homepage");
});

// Using multer middleware to handle file upload - Simple way
// app.post("/upload", upload.single("profileImage"), (req, res) => {
//   console.log(req.body);
//   console.log(req.file);
//   return res.json({
//     message: "File uploaded successfully",
//   });
// });

// Providing custom file name and destination for the uploaded file - Full control
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const uploadWithStorage = multer({ storage: storage });

app.post("/upload", uploadWithStorage.single("profileImage"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.json({
    message: "File uploaded successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/**
 * MULTER is a middleware for handling multipart/form-data, which is primarily used for uploading files. It makes it easy to handle file uploads in Express applications. In the above code, we have set up a simple Express server that uses Multer to handle file uploads. The uploaded files are stored in the "uploads/" directory. We also have a route to render the homepage where users can upload their profile images. When a file is uploaded, we log the request body and the file information to the console and send a JSON response indicating that the file was uploaded successfully.
 *
 */
