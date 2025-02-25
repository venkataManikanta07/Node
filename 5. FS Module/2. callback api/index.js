import * as fs from "fs";
// Importing everythign from fs module. 

fs.mkdir("D:\\Node\\TestFolder_From_VSCode2", (error) => {
    if(error){
        console.error(error);
    } else{
        console.log("Folder created successfully");
    }
})

// In here we don't need to use try catch block, because we are using (callback) api.
// The callback api is the old way of doing things in this.
// We use the function and pass the error as the first argument, and the data as the second argument.
// This is the way of handling the errors in the callback api.