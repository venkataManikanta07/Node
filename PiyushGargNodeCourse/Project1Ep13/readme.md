// const app = express(); - creates an instance of the express application. This instance is used to define routes and middleware for the application.

// app.use(express.urlencoded({ extended: true })); - This line of code is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property. The extended option allows for rich objects and arrays to be encoded into the URL-encoded format, which can be useful for complex data structures.

/**
 * MIDDLEWARE:
 * - MOre of a middleman, it is a function that has access to the request and response objects, and can modify them or perform some operations before passing control to the next middleware or route handler.
 * - MIDDLEWARE does PROCESSING.
 * - Middleware takes the request and response objects, and can perform operations such as logging, authentication, or data parsing before passing control to the next middleware or route handler.
 *
 * - MIDDLEWARE IS THE FUNCTION THAT HAVE ACCESS TO THE REQUEST OBJECT , RESPONSE OBJECT AND THE NEXT FUNCTION IN THE APPLICATION'S REQUEST-RESPONSE CYCLE. THE NEXT FUNCTION IS A FUNCTION IN THE EXPRESS ROUTER WHICH, WHEN INVOKED, EXECUTES THE NEXT MIDDLEWARE OR ROUTE HANDLER IN THE STACK.
 * - MIDDLEWARE EXAMPLE: app.use(express.urlencoded({ extended: true })) - This line of code is used to parse incoming request bodies in a middleware before your handlers, available under the req.body property. The extended option allows for rich objects and arrays to be encoded into the URL-encoded format, which can be useful for complex data structures.
 */


# SCHEMA

- Defining structure
- Schema - model
- Using model we can do crud operations.

# RESPONSE:

1. informational respones (101 - 199)
2. Success response (200 - 299)
3. Redirectional messages (300 - 399)
4. Client error response (400 - 499)
5. Serve Error (500 - 599)

# MongoDB

> Show dbs
> use <dbname>
> show collections
> db.coll.find()

# MODEL VIEW CONTROLLER

- Controller manuplates the Model & Model updates the View.

