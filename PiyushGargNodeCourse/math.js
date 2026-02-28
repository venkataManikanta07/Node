function add(a,b){
    return a+b; 
}


function sub(a,b){
    return a-b;
}

module.exports={
    AddFn:add, SubFn:sub
}


/*

1. This math is a separate module which has two functions add and sub.
2. We are exporting these two functions using module.exports.
3. In index.js we are importing these two functions using require and then we are calling these functions.

*/