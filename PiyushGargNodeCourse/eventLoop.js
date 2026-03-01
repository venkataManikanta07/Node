/**
 * EVENT LOOP
    * 1. The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible.
    * 2. The event loop continuously checks the event queue for any pending events and executes the corresponding callback functions when an event is triggered.
    * 3. The event loop is single-threaded, which means that it can only execute one callback function at a time. However, it can handle multiple events concurrently by using the event queue and the callback functions.
    * 4. The event loop is an essential part of Node.js and is responsible for handling all asynchronous operations in the application.
    * 
 * THREADS: 
 *   * 1. Node.js is single-threaded, which means that it can only execute one thread of code at a time. However, it uses an event-driven architecture to handle multiple requests concurrently without blocking the main thread.
 * 
 * WORKER THREADS:
 * 
 */


const fs = require("fs");
const os = require("os");

// Blocking code

// console.log("This is blocking code LINE 1");
const data = fs.readFileSync("./fileRead.txt", "utf-8");
// console.log(data);
// console.log("This is blocking code LINE 2");


// Non Blocking code
// console.log("\n");
// console.log("This is non-blocking code LINE 1");
fs.readFile("./fileRead.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        // console.log(data);
    }
});

// console.log("This is non-blocking code LINE 2");

// We should always write code in non-blocking way to avoid blocking the main thread and to improve the performance of the application.

/**
 * Default thread pool size is 4. 
 * We can change it by setting the environment variable UV_THREADPOOL_SIZE to a different value.
 * Max size based on CPU cores. 
 * 
 */

console.log(os.cpus().length); // 8 cores, so we can set the thread pool size to a maximum of 8.