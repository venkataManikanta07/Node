// STREAM 
/*
Streams are way to handle read and write data
. reading a file 
. writing a file 
. receiving large amount of data over a network 
. by default it accepts 64kb of data at a time
. we can change the size of the data by passing the size in the readStream method
. Streams are event emitters        
. Streams are instances of EventEmitter class
. Streams are used to handle read and write operations
*/

import {createReadStream} from 'fs';
// const stream = createReadStream('./data.txt', {
//     highWaterMark: 9000
//     // controls the size of the buffer we can increase or decrease this 
// })


const stream = createReadStream('./data.txt', {encoding: "utf-8"});

stream.on('data', (data)=> {
    console.log(data);
})