// In Node Js we have to create our own server. 

// CREATING A SERVER:

import http from "http";

const server = http.createServer((req, res) => {
    // res.setHeader("Content-Type", "text/html"); 
    // res.statusCode = 404; 
    // res.statusMessage = "BAD"; 
    // res.write("<h1>Hello from Node Js server</h1>");

    // In console network we will get the port and all those things 

    // shorthand for status (code, message & header)

    res.writeHead(202, "GOOD", {"Content-Type": "text/html"});
    res.write("<h1>Hello from Node Js server</h1>");

}); 

server.listen(4000, () => {
    console.log("Server is running on port 4000")

})