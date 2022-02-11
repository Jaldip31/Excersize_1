// 1. Write a JavaScript function that reverse a number. 
// Example x = 32243;
// Expected Output : 34223

//anonymous function
var reverse = function (num) {
    return String(num).split('').reverse().join("");
}
console.log(reverse(32145));                                                        //54123


//arrow function
//1
var reverse2 = (num) => String(num).split('').reverse().join('');
console.log(reverse2(12345));                                                       //54321

//2
var reverse1 = () => String(12345).split('').reverse().join('');
console.log(reverse1());                                                            //54321


//call back function by anonymous
function reverse3(abc) {
    console.log("ans : ", abc);                                                     //ans :  [Function (anonymous)]
    console.log(abc(678));                                                          //876
}
reverse3(function (num) {                                      // anonymous
    return String(num).split('').reverse().join("");
})

//call back function by arrow
function reverse4(abc) {
    console.log("ans : ", abc);                                                     //ans :  [Function (anonymous)]
    console.log(abc(345));                                                          //543
}
reverse4((num) => String(num).split('').reverse().join(""));   //arrow                   
