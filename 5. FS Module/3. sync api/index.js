// The allow us to write the code synchronously

import * as fs from "fs"; 
// CREATE DIRECTORY
// No need to specify try catch block, because we are using callback api.
// No need to pass the callback function.

fs.mkdirSync("D:\\Node\\TestFolder_From_VSCode3\\testDemo", {
  recursive: true,
});
console.log("Folder created successfully");

// fs.rmdirSync("D:\\Node\\TestFolder_From_VSCode3\\testDemo");
// console.log("Folder removed successfully");

// we should always use the (sync) next to the function name to make it synchronous.