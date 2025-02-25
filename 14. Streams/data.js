import fs from "fs";

for (let i = 0; i < 10000; i++) {
    fs.writeFileSync("./data.txt", `${i}\n`, {flag: "a"}); 

    // flag a means append
    // flag w means write
    // flag r means read
    // flag x means exclusive
    // flag a+ means read and append
    // flag w+ means read and write
    // flag r+ means read and write
    // flag x+ means exclusive read and write
}