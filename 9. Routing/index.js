// Nowadays everyone is using Express but to get the best understanding we are going to lean in node too.

import http from "http";

const server = http.createServer((req, res) => {
    res.write("<h1>Inside the routing file Http</h1>")
    console.log(req.url); // this will five the req from the url like /home 

    if(req.url === "/") {
        res.writeHead(200, "OK", {"Content-Type": "text/html"})
        res.end(
            `<section>
                <h1> Home page </h1>
                <a href = "/contact"> contact page</a>
            </section>`
        );
    } else if(req.url === "/about") {
        res.writeHead(200, "OK", {"Content-Type": "text/html"})
        res.end("<h1> In the about page </h1>");
    } else if(req.url === "/contact"){
        res.writeHead(200, "OK", {"Content-Type": "text/html"})
        res.end("<h2>In the contact page</h2>")
    } else {
        res.writeHead(404, "BAD", {"Content-Type": "text/html"})
        res.end("<h1>404 page not found : (</h1>")
    }

    //  /homepage, /about, / 
});

server.listen(5000, () => {
  console.log("Server is running");
});
