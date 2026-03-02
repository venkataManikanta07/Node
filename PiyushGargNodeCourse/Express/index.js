/**
 * EXPRESS JS - It is a web application framework for Node.js, designed to simplify the process of building web applications and APIs. It provides a robust set of features for handling HTTP requests, routing, middleware, and more.
 * 
 * - There is no need for the URL package to be installed in this because express takes care of all the routing and parsing of the URL and query parameters.
 * - We can access the query parameters using req.query in the server.
 * - We can also access the path parameters using req.params in the server.
 */

const express = require('express');

const app = express(); 


app.get("/", (req, res) => {
    res.send("<h1>Welcome to the home page</h1>");
})

app.get("/about", (req, res) => {
    res.send(`<h1>About us page</h1> Hey there ${req.query.name} and you are ${req.query.age} years old.`);
})


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})


// Versioning in Packages 
/**
 * 4.15.0 - Major version 
 * 4 is the major version, 15 is the minor version and 0 is the patch version.
 * caret ^ - allows updates that do not change the leftmost non-zero digit in the version number. For example, ^4.15.0 would allow updates to any version from 4.15.0 to less than 5.0.0.
 * tilde ~ - allows updates that do not change the leftmost non-zero digit in the minor version number. For example, ~4.15.0 would allow updates to any version from 4.15.0 to less than 4.16.0.
 * exact version - allows only that specific version to be installed. For example, 4.15.0 would only allow version 4.15.0 to be installed.
 */


/**
 * REST API - Representational State Transfer Application Programming Interface
 *  . Client make a request to the server, server processes the request and sends back a response to the client.
 * 
 * SSR - Client make GET request to the server, server renders the HTML and sends it back to the client.
 *  . Fast to load the page because the server is doing all the work of rendering the HTML.
 * 
 * CSR - Client make a GET request to the server, server sends back the HTML, CSS and JavaScript files to the client, client renders the HTML and executes the JavaScript to make API calls to the server to get the data and render it on the page.
 *  . Slower to load the page because the client is doing all the work of rendering the HTML and executing the JavaScript.
 */