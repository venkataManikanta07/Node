/* 
Modules allow us to resuse the code, so that we don't need to write them again and again. 
- we export the greet function and then import that over here. 
*/

const greet = require("./greet");
const {person1, person2, person3} = require("./persons.js"); 
greet("John Doeeee");
console.log(person1);
greet(person2);