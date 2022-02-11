
// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. 
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

//anonymous function
var long_word1 = function (str) {
    let max = -1;
    let a = str.split(" ");
    for (i = 0; i < a.length; i++) {
        if (max < a[i].length) {
            max = a[i].length;
            word = a[i];
        }
    }
    return word;
}
console.log(long_word1('Web Development Tutorial'));                                //Development

//arrow function
var long_word2 = (str) => {
    let max = -1;
    let a = str.split(" ");
    for (i = 0; i < a.length; i++) {
        if (max < a[i].length) {
            max = a[i].length;
            word = a[i];
        }
    }
    return word;
}
console.log(long_word2('Skill qode the programming lab'));                              //programming

//call back function by anonymous
function long_word3(abc) {
    console.log("ans : ", abc);                                                         //ans :  [Function (anonymous)]
    console.log(abc("skill qode"));                                                     //skill
}
long_word3(function (str) {
    let max = -1;
    let a = str.split(" ");
    for (i = 0; i < a.length; i++) {
        if (max < a[i].length) {
            max = a[i].length;
            word = a[i];
        }
    }
    return word;
})

//call back function by arrow
function long_word4(abc) {
    console.log("ans : ", abc);                                                         //ans :  [Function (anonymous)]
    console.log(abc("Java Script"));                                                    //Script
}
long_word4((str) => {
    let max = -1;
    let a = str.split(" ");
    for (i = 0; i < a.length; i++) {
        if (max < a[i].length) {
            max = a[i].length;
            word = a[i];
        }
    }
    return word;
})

















