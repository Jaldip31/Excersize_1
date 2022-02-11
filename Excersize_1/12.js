//12. Write a JavaScript function which says whether a number is perfect.  Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128

//anonymous function
var perfect_number1 = function (num){
    let a=0,b=num;
    while(b>1)
        a += b = Math.round(b/2);
     
    return (num==a)?"perfect number":"not perfect number";
}
console.log(perfect_number1(496));                                                                                               //perfect number

//arrow function
var perfect_number2 = (num) => {
    let a=0,b=num;
    while(b>1)
        a += b = Math.round(b/2);

    return (num==a)?"perfect number":"not perfect number";
}
console.log(perfect_number2(10));                                                                                               //not perfect number

//call back function by anonymous
function perfect_number3(abc) {
    console.log("ans : ", abc);                                                                                                 //ans :  [Function (anonymous)]
    console.log(abc(8128));                                                                                                     //perfect number
}
perfect_number3 (function(num) {
    let a=0,b=num;
    while(b>1)
       a += b = Math.round(b/2);
    return (num==a)?"perfect number":"not perfect number";
})

//call back function by arrow
function perfect_number4(abc) {
    console.log("ans : ", abc);                                                                                                 //ans :  [Function (anonymous)]
    console.log(abc(60));                                                                                                       //perfect number
}
perfect_number4 ((num) => {
    let a=0,b=num;
    while(b>1)
        a += b = Math.round(b/2);
    return (num==a)?"perfect number":"not perfect number";
})
