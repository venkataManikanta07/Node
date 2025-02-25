import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, "OK", { "Content-Type": "text/html" });
  res.end("<h1>What's a good bug & bad & great bug.</h1>");
});

server.listen(4000, () => {
  console.log("Listening on port 4000");
});
