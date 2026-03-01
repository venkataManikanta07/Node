const fs = require("fs");
// there is no ./ in the path because it is a built-in module and we can directly require it.
// This is a built-in module in Node.js which provides an API for interacting with the file system.

fs.writeFileSync("./test.txt", "Hello World");
// This line of code is using the writeFileSync function from the fs module to create a file named "hello.txt" and write the string "Hello World" into it. If the file already exists, it will overwrite the existing content with "Hello World".
// Write file and write file sync are two different functions. Write file is asynchronous and write file sync is synchronous. Asynchronous functions do not block the execution of the code, while synchronous functions block the execution of the code until the operation is completed. In this case, we are using writeFileSync which is a synchronous function, so it will block the execution of the code until the file is created and written with "Hello World".

const data = fs.readFileSync("./fileRead.txt", "utf-8");
// console.log(data);
// This line of code is using the readFileSync function from the fs module to read the content of the file named "hello.txt" and store it in the variable data. The second argument "utf-8" is used to specify the encoding of the file. Finally, we are logging the content of the file to the console.


const data2 = fs.readFile("./fileRead.txt", "utf-8", (err, data)=> {
    if(err){
        console.log(err);
    }
    else {
        console.log(data);
    }
})

fs.appendFileSync("./fileRead.txt", new Date().toLocaleString());
console.log(data2);


/**
 * 1. unline writeFileSync, readFileSync and appendFileSync functions, there are also asynchronous versions of these functions which are writeFile, readFile and appendFile respectively.
 * 2. copyFileSync is another function in the fs module which is used to copy a file from one location to another. It takes two arguments, the first argument is the source file path and the second argument is the destination file path.
 * 3. unlinkSync is another function in the fs module which is used to delete a file. It takes one argument which is the file path of the file to be deleted.
 * 4. mkdirSync is another function in the fs module which is used to create a directory. It takes one argument which is the directory path of the directory to be created.
 * 5. rmdirSync is another function in the fs module which is used to delete a directory. It takes one argument which is the directory path of the directory to be deleted.
 */