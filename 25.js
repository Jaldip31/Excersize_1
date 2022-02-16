
//logic-1
//anonymous function 
var Longest_Country_Name1=function(str) {
    return str.reduce(function (pv, cv) {
        return pv.length > cv.length ? pv : cv;
    }, "");
}
console.log(Longest_Country_Name1(["c", "c++", "java"]));                                           //java

//arrow function   
var Longest_Country_Name2=(str)=> {
    return str.reduce(function (pv, cv) {
        return pv.length > cv.length ? pv : cv;
    }, "");
}
console.log(Longest_Country_Name2(["Australia", "United States of America", "Germany"]));           //United States of America

//call back function by anonymous    
function Longest_Country_Name3(fun){
    console.log("ans : ",fun);                                                                      //ans :  [Function (anonymous)]
    console.log(fun(["Java","Script"]))                                                             //Script
}
Longest_Country_Name3(function(str) {
    return str.reduce(function (pv, cv) {
        return pv.length > cv.length ? pv : cv;
    }, "");
})

//call back function by arrow
function Longest_Country_Name4(fun){
    console.log("ans : ",fun);                                                                      //ans :  [Function (anonymous)]
    console.log(fun(["skill","qode"]))                                                             //skill
}
Longest_Country_Name4((str)=> {
    return str.reduce(function (pv, cv) {
        return pv.length > cv.length ? pv : cv;
    }, "");
})

//logic-2
var Longest_Country_Name = function (str)
{
    let max = -1
    for (i = 0; i < str.length; i++) 
    {
        if (str[i].length > max) 
            max = str[i].length
            word = str[i]
        
    }
    return word
}
console.log(Longest_Country_Name(["Australia", "Germany","United states of america"]))