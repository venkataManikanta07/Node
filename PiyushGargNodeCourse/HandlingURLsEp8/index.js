/**
 * URL 
 * Uniform Resource Locator
 * 1. URL is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it. 
 * 
 * QUERY PARAMS: 
 * piyushgarg.com/user?name=piyush&age=25
 * 1. Whatever comes after the question mark(?) is called query params.
 * 2. We separate the query params using & and we separate the key and value using =.
 * 3. We can have multiple query params in a URL.
 * 4. We can access the query params using req.query in the server.
 */


const fs = require("fs");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true); // true to get the query params as an object
    console.log(parsedUrl);
    if(req.url === "/favicon.ico") {
        return res.end(); // we can ignore the favicon request
    }
    const log = `Request received at ${new Date().toLocaleDateString()} ${parsedUrl.pathname} with method ${req.method} and url ${req.url}\n`;

    fs.appendFile("./logRequest.txt", log, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Request logged successfully");
        }
    });

    switch(parsedUrl.pathname) {
        case "/":
            res.end("<h1>Welcome to the home page</h1>");
            break;  
        case "/about":
            res.end(`<h1>I am ${parsedUrl.query.name || "Guest"} and I am ${parsedUrl.query.age || "Unknown"} years old.</h1>`);
            break;
        case "/search": {
            // provide a default so we never log/return undefined
            const searchTerms = parsedUrl.query.search_query || "No search terms provided";
            console.log(`Search terms: ${searchTerms}`);
            res.end(`Here are your search results for ${searchTerms}`);
            // break is required or we'll fall through to the default case and end again
            break;
        }

        default:
            res.end("<h1>Page not found</h1>");
    }
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
})