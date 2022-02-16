// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

//anonymous function  
var random_string1 =function (num){
    let text="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ans="";
    for (let i = 0; i < num; i++) 
        ans+=text.charAt(Math.random()*text.length);
    return ans;
}
console.log(random_string1(7));                                                                         // --> random output

//arrow function   
var random_string2 = (num)=>{
    let text="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ans="";
    for (let i = 0; i < num; i++) 
        ans+=text.charAt(Math.random()*text.length);
    return ans;
}
console.log(random_string2(7));                                                                         // --> random output

//call back function by anonymous    
function random_string3(fun) {
    console.log("ans : ", fun);                                                                         //ans :  [Function (anonymous)]
    console.log(fun(7))                                                                                 // --> random output
}
random_string3 (function (num){
    let text="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ans="";
    for (let i = 0; i < num; i++) 
        ans+=text.charAt(Math.random()*text.length);
    return ans;
})

//call back function by arrow
function random_string3(fun) {
    console.log("ans : ", fun);                                                                         //ans :  [Function (anonymous)]
    console.log(fun(7))                                                                                 // --> random output
}
random_string3 ((num)=>{
    let text="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let ans="";
    for (let i = 0; i < num; i++) 
        ans+=text.charAt(Math.random()*text.length);
    return ans;
})