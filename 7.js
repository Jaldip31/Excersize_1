//7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. 

//anonymous function
var vowel =function (str){
    let vowels = /[aeiou]/gi;
    let result = str.match(vowels);
    return result.length;
}
console.log(vowel('skill qode'));                                           //3

//arrow function
var vowel2 = (str)=>{
    let vowels = /[aeiou]/gi;
    let result = str.match(vowels);
    return result.length;
}
console.log(vowel2('Programming'));                                         //3

//call back function by anonymous
function vowel3(abc){
    console.log("ans :",abc);                                               //ans : [Function (anonymous)]
    console.log(abc('hello program'));                                      //4
}
vowel3 (function(str){
    let vowels = /[aeiou]/gi;
    var result =str.match(vowels);
    return result.length;  
})

//call back function by arrow
function vowel4(abc){
    console.log("ans :",abc);                                               //ans : [Function (anonymous)]
    console.log(abc('code'));                                               //2
}
vowel4 (function(str){
    let vowels = /[aeiou]/gi;
    var result =str.match(vowels);
    return result.length;  
})



