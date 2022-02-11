// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

//anonymous function
var upper1 = function (str) {
    let arr = str.split(" ");
    for (i = 0; i < arr.length; i++)
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    return arr.join(" ");
}
console.log(upper1('the quick brown fox'));                                      //The Quick Brown Fox

//arrow function
var upper2 = (str) => {
    let arr = str.split(" ");
    for (i = 0; i < arr.length; i++)
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    return arr.join(" ");

}
console.log(upper2("hello world"));                                             //Hello World

//call back function by anonymous
function upper3(abc) {
    console.log("ans :", abc);                                                  //ans : [Function (anonymous)]
    console.log(abc("skill qode programming lab"));                             //Skill Qode Programming Lab
}
upper3(function (str) {
    let arr = str.split(" ");
    for (i = 0; i < arr.length; i++)
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    return arr.join(" ");
})

//call back function by arrow
function upper4(abc) {
    console.log("ans :", abc);                                                  //ans : [Function (anonymous)]
    console.log(abc("javaScript"));                                             //JavaScript
}
upper4((str) => {
    let arr = str.split(" ");
    for (i = 0; i < arr.length; i++)
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    return arr.join(" ");
})