# Create Server.js file 
- Install express, dotenv. 
- Have a port number in .env 
- for the contacts route have a contactRoutes.js in the routes folder. 
- have a middleware for the route to accept the json data. 

# Controllers
- have the route functions in the middleware itself. 
- what data will the user send, how should we handle the data. 
- Validation errors - status codes and messages. 
- Have error handling middleware for the app (middleware) folder. 

# Middleware. 
- Proper error handling middleware. 
- we use that middleware in the server.js file (just below the routes not above the routes)