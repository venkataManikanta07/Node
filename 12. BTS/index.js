// BLOCKIGN CODE

// console.log("Start");
// alert("This is blocking code");
// console.log("End");

// Try this in developer chrome console or link a html file.

// NON BLOCKING CODE
// console.log("Start");
// setTimeout(() => {
//   console.log("This is non blocking code");
// }, 1000);

// Non blocking code is used in Node Js.
import fs from "fs";

console.log("Start");
let data = fs.readFileSync("test.txt");
console.log(data.toString());
console.log("End");

console.log("-----------")

console.log("Start");
let data1 = fs.readFile("test.txt", "utf-8" , (err, res) => {
  err ? console.log(err) : console.log(res.toString());
});
console.log("End");