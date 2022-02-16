// 28.Write a JavaScript program to pass a 'JavaScript function' as parameter.
function fun(){
    return "Hello";
}
//anonymous function
var test1 = function (f,str){
    console.log( f , str);
} 
test1(fun(),"World");                                                                                  //Hello World

//arrow function
var test2 = (f,str) => {
    console.log( f , str);
} 
test2(fun(),"Java Script");                                                                            //Hello Java Script

//call back function by anonymous 
function test3(abc) {
    console.log("ans : ", abc);                                                                         //ans :  [Function (anonymous)]
    abc(fun(),"World");                                                                                 //Hello World
}
test3 (function (f,str){
    console.log( f , str);
});

//call back function by arrow
function test4(abc) {
    console.log("ans : ", abc);                                                                         //ans :  [Function (anonymous)]
    (abc(fun(),"Java Script"));                                                                         //Hello Java Script
}
test4 ((f,str)=>{
    console.log( f , str);
});