//8. Write a JavaScript function that accepts a number as a parameter and check if the number is prime or not.

//anonymous function
var prime = function (num) {
    let count = 0
    for (i = 2; i < num; ++i)
        (num % i == 0) ? count++ : 0;
        
    return (count == 0) ? "prime": "not prime";
}
console.log(prime(7));

// // arrow function
// var prime = (num) => {
//     var count = 0
//     for (i = 2; i < num; i++) {
//         if (num % i == 0) {
//             count++;
//         }
//     }
//     return (count == 0) ? console.log("prime") : console.log("not prime");
// }
// prime(10)

// //call back function by anoymous
// function prime1(abc) {
//     console.log("ans : ", abc)
//     abc(6)
// }
// prime1(function (number) {
//     var c = 0
//     for (i = 2; i < number; i++) {
//         if (number % i == 0) {
//             c++
//         }
//     }
//     (c == 0) ? console.log("prime") : console.log("not prime")
// })