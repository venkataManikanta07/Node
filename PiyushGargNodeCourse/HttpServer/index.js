const http = require('http');
const fs = require('fs');

// if there is no ./ then it is a core module, if there is ./ then it is a local module, if there is no / then it is a node module.

const server = http.createServer((req, res) => {
    const log = `Request recieved at ${new Date().toLocaleDateString} ${req.path} with method ${req.method} and url ${req.url}\n`;
    fs.appendFile("./requestLog.txt", log, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Request logged successfully");
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Successfully logged the request & details saved.");
        }
    })

    switch(req.url) {
        case "/":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>Welcome to the home page</h1>");
            break;
        case "/about":
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end("<h1>About us page</h1>");
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/html" });
            res.end("<h1>Page not found</h1>");
    }
    // console.log("Request received", "\n");
    console.log(req); // req is an object which contains all the information about the request made by the client. It has properties like method, url, headers, etc.
    // res.end("Request ended");
});
// Create server is a method of http module which creates a server and takes a callback function as an argument. 
// The callback function is called when a request is received by the server. The callback function takes two arguments, req and res, which are the request and response objects respectively.

// we need a port number to listen to the server, we can use any port number between 0 and 65535, but it is recommended to use a port number above 1024 to avoid conflicts with other applications.
server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})

/*
res.writeHead() is a method of the response object which is used to set the status code and the headers of the response. 
res.end() is a method of the response object which is used to end the response and send the data to the client. 
*/ 