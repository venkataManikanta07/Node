// PATH MODULE 

import path from "path"; 
console.log(path.basename("c:\\nodejs\\app.html"));  //gives us t he last part of the file name (app.html in this case)
// console.log(path.basename("c:\\nodejs\\index.js", "js"));  //this gives us the last part without extension

// console.log(path.dirname("c:\\nodejs\\courses\\app.html"));  //gives us the directory name
// console.log(path.extname("c:\\nodes\\courses\\app.html"));  //gives us the extension of the fileS
// console.log(path.join("c:", "webdev", "index.html"));  //joins the paths together
 console.log(path.join("c:", "webdev", "index.html", "..")); // it will go up a leve
   //joins the paths together

console.log(path.normalize("c:\\\\\webdev\/\index.html"));  //normalizes the path
console.log(path.parse("c:\\webdev\\index.html"));  //parses the path
console.log(path.parse("c:\\webdev\\index.html").base);  //parses the path
console.log(path.parse("c:\\webdev\\index.html").name);  //parses the path