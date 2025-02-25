import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, "OK", { "Content-Type": "text/html" });
  res.end("<h1>What's a good bug & bad & great bug.</h1>");
});

server.listen(4000, () => {
  console.log("Listening on port 4000");
});


// Nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected. Nodemon does not require any additional changes to your code or method of development. Nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.
// npm install -g nodemon   
// nodemon index.js
