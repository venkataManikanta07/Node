import * as fs from "fs/promises";

//creating diretory / folder

// try{
//     await fs.mkdir("D:\\Node\\TestFolder_From_VSCode");
//     // await fs.mkdir("D:\\Node\\TestFolder 2 \\ internalFolder", {recursive: true});
//     // this recursive parameter will create the folders recursively if the parent folder is not present without throwing an error
//     console.log("Folder created successfully");

// } catch (error) {
//     console.error(error);
// }

// Read the content
// try {
//   const files = await fs.readdir("D:\\Node");
//   for (const file of files) {
//     console.log(file);
//   }
// } catch (error) {
//   console.log(error);
// }


// REMOVE THE DIRECTORY: 
// try {
//     await fs.rmdir("D:\\Node\\TestFolder_From_VSCode");
//     //The folder should be empty in order to delte this, and it should be present
//     console.log("Folder removed successfully");
// } catch (error) {
//     console.log(error); 
// }

// CREATE & WRITE TO A FILE:
// try {
//     await fs.writeFile('README.md', "# Hello NodeJs");
//     // Create & injects the data
//     console.log("File created successfully");
// } catch (error) {
//     console.log(error);
// }

// READ THE FILE:
// try {
//     const data = await fs.readFile("README.md", "utf-8");
//     // Without utf-8 it will return a buffer
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }

// APPEND TO A FILE:
// try {
//     await fs.appendFile("README.md", "- This is a new Line appending from fs methods ");
//     console.log(data);
// } catch (error) {
//     console.log(error);
// }


// COPY A FILE:
// try {
//     await fs.copyFile("README.md", "README_copy.md");
//     console.log("File copied successfully");
// } catch (error) {
//     console.log(error);
// }

// GET FILE INFO:
try {
    const info = await fs.stat("README.md");
    console.log(info);
    console.log(info.isFile());
    console.log(info.isDirectory());
} catch (error) {    
    console.log(error);
}