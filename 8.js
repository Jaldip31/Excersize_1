//8. Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

//anonymous function
var prime1 = function (num) {
    let count = 0
    for (i = 2; i < num; ++i)
        (num % i == 0) ? count++ : 0;
    return (count == 0) ? "prime" : "not prime";
}
console.log(prime1(7));                                                                     //prime

// arrow function
var prime2 = (num) => {
    let count = 0
    for (i = 2; i < num; i++)
        (num % i == 0) ? count++ : 0;
    return (count == 0) ? "prime" : "not prime";
}
console.log(prime2(10));                                                                    //not prime

//call back function by anoymous
function prime3(abc) {
    console.log("ans : ", abc)                                                              //ans :  [Function (anonymous)]
    console.log(abc(6))                                                                     //not prime
}
prime3(function (num) {
    let count = 0;
    for (i = 2; i < num; i++)
        (num % i == 0) ? count++ : 0;
    return (count == 0) ? "prime" : "not prime";
})

//call back function by arrow 
function prime4(abc) {
    console.log("ans : ", abc)                                                              //ans :  [Function (anonymous)]
    console.log(abc(13))                                                                    //prime
}
prime4((num) => {
    let count = 0;
    for (i = 2; i < num; i++)
        (num % i == 0) ? count++ : 0;
    return (count == 0) ? "prime" : "not prime";
})
