// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.

//logic-1
//anonymous function  
var repeat1 = function (str,q) {
       let count = 0 ;
       for (i = 0; i < str.length; i++)
          (q == str[i]) ? count++ : 0;
    return count;
 }
 console.log(repeat1("abacddbec","e"));                                                                 //1

 //arrow function   
 var repeat2 = (str,q) => {
    let count = 0 ;
    for (i = 0; i < str.length; i++)
       (q == str[i]) ? count++ : 0;
 return count;
}
console.log(repeat2("hello world","l"));                                                                //3

//call back function by anonymous    
function repeat3(fun) {
    console.log("ans : ", fun);                                                                         //ans :  [Function (anonymous)]
    console.log(fun("skill qode the programming lab","e"));                                             //2
}
repeat3 (function (str,q) {
    let count = 0 ;
    for (i = 0; i < str.length; i++)
       (q == str[i]) ? count++ : 0;
 return count;
})

//call back function by arrow
function repeat4(fun) {
    console.log("ans : ", fun);                                                                         //ans :  [Function (anonymous)]
    console.log(fun("bananas","e"));                                                                    //0
}
repeat4 (function (str,q) {
    let count = 0 ;
    for (i = 0; i < str.length; i++)
       (q == str[i]) ? count++ : 0;
 return count;
})

// logic-2
// using filter()            //arrow
var repeat5 = (str, q) => str.split("").filter(ele => ele == q).length
console.log(repeat5("abacddbec", "e"));                                                                  //1

// extra
var repeat1 = function (str,q) {
    let count = 0 ;
    str.split("").forEach(ele=>(q == ele) ? count++ : 0)
        return count;
}
console.log(repeat1("abacddbec","e"));                                                                  // 1


