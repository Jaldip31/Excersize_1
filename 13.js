//13. Write a JavaScript function to compute the factors of a positive integer.  

//anonymous function
var factors1 = function(a){
    let arr=[];
    for(i=a;i>0;i--)
        (a%i==0)?arr.push(a/i):0;
    return arr;
}
console.log(factors1(16));                                                                   //[ 1, 2, 4, 8, 16 ]

//arrow function
var factors2 = (a)=>{
    let arr=[];
    for(i=a;i>0;i--)
        (a%i==0)?arr.push(a/i):0;
    return arr;
}
console.log(factors2(10));                                                                   //[ 1, 2, 5, 10 ]

//call back function by anonymous
function factors3(abc) {
    console.log("ans : ", abc);                                                             //ans :  [Function (anonymous)]
    console.log(abc(25));                                                                   //[ 1, 5, 25 ]                                
}
factors3 (function(a){
    let arr=[];
    for(i=a;i>0;i--)
        (a%i==0)?arr.push(a/i):0;
    return arr;
})

//call back function by arrow
function factors4(abc) {
    console.log("ans : ", abc);                                                             //ans :  [Function (anonymous)]
    console.log(abc(45));                                                                   //[ 1, 3, 5, 9, 15, 45 ]                             
}
factors4 ((a)=>{
    let arr=[];
    for(i=a;i>0;i--)
        (a%i==0)?arr.push(a/i):0;   
    return arr;
})