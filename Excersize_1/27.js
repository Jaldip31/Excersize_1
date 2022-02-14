// // 27.Write a JavaScript function that returns the longest palindrome in a given string.

//anonymous function  //arrow function   //call back function by anonymous    //call back function by arrow
var test1 = function (str) {
    var arr = [];
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length; j++) 
            str.slice(i, j) == str.slice(i, j).split("").reverse().join("")? arr.push(str.slice(i, j)): 0;
    }
    var max = -1,ans;
    for (i = 0; i < arr.length; i++) 
        if (arr[i].length > max) {
            max = arr[i].length;
            ans = arr[i];
        }
    return ans;
};
console.log(test1("abracadabra"));                                                                                      //aca

//arrow function
var test2 = function (str) {
    var arr = [];
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length; j++) 
            str.slice(i, j) == str.slice(i, j).split("").reverse().join("")? arr.push(str.slice(i, j)): 0;
    }
    var max = -1,ans;
    for (i = 0; i < arr.length; i++) 
        if (arr[i].length > max) {
            max = arr[i].length;
            ans = arr[i];
        }
    return ans;
};
console.log(test2("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE"));                                            //12345678987654321

//call back function by anonymous 
function test3(abc) {
    console.log("ans : ", abc);                                                                                         //ans :  [Function (anonymous)]
    console.log(abc("bananas"));                                                                                        //anana
}
test3 (function (str) {
    var arr = [];
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length; j++) 
            str.slice(i, j) == str.slice(i, j).split("").reverse().join("")? arr.push(str.slice(i, j)): 0;
    }
    var max = -1,ans;
    for (i = 0; i < arr.length; i++) 
        if (arr[i].length > max) {
            max = arr[i].length;
            ans = arr[i];
        }
    return ans;
});

//call back function by anonymous 
function test4(abc) {
    console.log("ans : ", abc);                                                                                         //ans :  [Function (anonymous)]
    console.log(abc("8971435341"));                                                                                     //43534
}
test4 ((str) => {
    var arr = [];
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length; j++) 
            str.slice(i, j) == str.slice(i, j).split("").reverse().join("")? arr.push(str.slice(i, j)): 0;
    }
    var max = -1,ans;
    for (i = 0; i < arr.length; i++) 
        if (arr[i].length > max) {
            max = arr[i].length;
            ans = arr[i];
        }
    return ans;
});