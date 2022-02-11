// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? 
// A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

//anonymous function
var palindrome1 = function (str) {
    b2 = str.split('').reverse().join('');              //edoq lliks
    return (a1 === b2) ? console.log("palindrome") : console.log("Not palindrome");
}
palindrome1(a1 = 'skill qode')                                                          //Not palindrome

//arrow function
var palindrome2 = () => {
    b2 = a2.split('').reverse().join('');               //mom  
    (a2 === b2) ? console.log("palindrome") : console.log(" Not palindrome");
}
palindrome2(a2 = 'mom');                                                                //palindrome



//call back function by anonymous
function palindrome3(abc) {
    console.log("ans : ", abc);                                                         //ans :  [Function (anonymous)]
    console.log(abc(a3 = "hello"));                                                     // not palindrome
}
palindrome3(function (str) {
    b3 = str.split('').reverse().join('');                 //olleh
    if (a3 === b3) return "palindrome";
    else return "not palindrome";
})

//call back function by arrow
function palindrome4(abc) {
    console.log("ans : ", abc);                                                     //ans :  [Function (anonymous)]
    console.log(abc(a4 = "malayalam"));                                             //palindrome
}
palindrome4((str) => {
    b4 = str.split("").reverse().join("");                 //malayalam       
    if (a4 == b4) return "palindrome";
    else return "not palindrome";
})








