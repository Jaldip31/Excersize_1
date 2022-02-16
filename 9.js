// 9.Write a JavaScript function which accepts an argument and returns the type. 
var test = function(val){
    return typeof val;

}
console.log(test(12))                                                           // number
console.log(test("hello"))                                                      //string
console.log(test(true))                                                         //boolean
console.log(test(function(){}))                                                 //function
console.log(test({x:3}))                                                        // object
console.log(test([1,2]))                                                        // object
console.log(test(undefined))                                                    // undefined

