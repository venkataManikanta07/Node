# Hello NodeJs

4 
FS Module has three flavours 
- promise 
- synchronous 
- callback 


11. NPM 
- Npm allows us to do 3 things 
    . reuse code 
    . use own code in other projects 
    . use code written by other developers
    . we can write code and push it to npm  - others can use it as a package.

- npm init : initialize the npm package. 

V 8 - LIB-UV
. [V8] Converts JS code into machine code so that machine can understand 

. [lib uv] open sourse library with strong focus on Asynchronous I/O. 

- Node js also depends on 
. LLHttp c-ares openSSL Zlib 

- THREAD: Each unit capable of executing cod is called thread. 
. one thread can do multiply function another can write into a file and another can do another function 
. but node js is single threaded like js - one thing at a time. 
. EVENT LOOP is used to make async kind of things and multi thread operations. 

- THE EVENT LOOP wil be generated in the thread & the role of this loop is to SCHEDULE which operations our thread should be performing at any given point. 🤝 
. Where this operation is performing and when it will be performing. 

- callback is async function 
- callback functionis called to complete a given task 
- callback helps us in preventing fromt he blocking of the code. 
- node makes heavy use of callbacks. 

- NODE PROCESS:
SINGLE THREAD 
    . intiial program 
    . import modules 
    . register callbacks 
    . start the event loop 
        - The enent loop will start only it has some heavy data operations to do. 
        - The event loop will start up the thread pool then it will have multiple threads and each will do up a specific task. 