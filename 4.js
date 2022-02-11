// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


//anonymous function
var sorting1 = function (str) {
    return str.split('').sort().join('');
}
console.log(sorting1('webmaster'));                                                     //abeemrstw


//arrow function
var sorting2 = (str) => str.split('').sort().join('');
console.log(sorting2('hello world'));                                                   // dehllloorw


//call back function by anonymous
function sorting3(abc) {
    console.log("ans :", abc);                                                           //ans : [Function (anonymous)]
    console.log(abc("zyxw"));                                                            //wxyz
}
sorting3(function (str) {
    return str.split("").sort().join("");
})

//call back function by arrow
function sorting4(abc) {
    console.log("ans :", abc);                                                          //ans : [Function (anonymous)]
    console.log(abc("world"));                                                          //dlorw
}
sorting4(function (str) {
    return str.split("").sort().join("");
})