import greet from "./greet.js";
import {p1, p2, p3} from "./people.js";

/* 
- .js extension is a must here.
- To make this work change the file extension to .mjs
- The most popular thing is in package.json file set the type to module. 
    . but we can't log the __filename in this import thing.
*/

greet("John Doeeee");
console.log(p1);
