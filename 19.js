// 19. Write a JavaScript function that returns array elements larger than a number.
//logic-1
//anonymous function  
var larger1 = function (arr, n) {
    let ans = [];
    for (i = 0; i < arr.length; i++)
        (arr[i] > n) ? ans.push(arr[i]) : 0;
    return ans;
}
console.log(larger1([10, 4, 73, 58, 66, 92], 60));                                                      //[ 73, 66, 92 ]

//arrow function   
var larger2 = (arr, n) => {
    let ans = [];
    for (i = 0; i < arr.length; i++)
        (arr[i] > n) ? ans.push(arr[i]) : 0;
    return ans;
}
console.log(larger2([10, 4, 73, 58, 66, 92], 50));                                                      //[ 73, 58, 66, 92 ]

//call back function by anonymous    
function larger3(fun) {
    console.log("ans : ", fun);                                                                         //ans :  [Function (anonymous)]
    console.log(fun([10, 4, 73, 58, 66, 92], 90))                                                       //[ 92 ]
}
larger3(function (arr, n) {
    let ans = [];
    for (i = 0; i < arr.length; i++)
        (arr[i] > n) ? ans.push(arr[i]) : 0;
    return ans;
})

//call back function by arrow
function larger4(fun) {
    console.log("ans : ", fun);                                                                         //ans :  [Function (anonymous)]
    console.log(fun([10, 4, 73, 58, 66, 92], 40))                                                       //[ 73, 58, 66, 92 ]
}
larger4((arr, n) => {
    let ans = [];
    for (i = 0; i < arr.length; i++)
        (arr[i] > n) ? ans.push(arr[i]) : 0;
    return ans;
})

// logic-2
//using filter()            //arrow
var larger1 = (arr, query) => arr.filter(ele => ele > query)
console.log(larger1([10, 4, 73, 58, 66, 92], 60))

//using reduce()            //arrow
var larger2 = (arr, query) => arr.reduce((p, c) => (c > query) ? p.concat(c) : p, [])
console.log(larger2([10, 4, 73, 58, 66, 92], 60))

// using forEach()            //arrow
var ans = [];
var larger3 = (arr, query) => {
    arr.forEach((ele) => (ele > query) ? ans.push(ele) : 0);
    return ans;
}
console.log(larger3([10, 4, 73, 58, 66, 92], 60))

// using map()            //arrow
var ans = [];
var larger4 = (arr, query) => {
    arr.map((ele) => (ele > query) ? ans.push(ele) : 0);
    return ans;
}
console.log(larger4([10, 4, 73, 58, 66, 92], 60))

//for...of
function larger5(arr, query){
    let ans = [];
    for (let ele of arr)
        (ele >= query) ?ans.push(ele):0;
    return ans;
}
console.log(larger5([10, 4, 73, 58, 66, 92], 60))

function larger6(query) {
    return function (ele) {
        return (ele >= query);
    };
}
var result = [10, 4, 73, 58, 66, 92].filter(larger6(60));
console.log(result);
