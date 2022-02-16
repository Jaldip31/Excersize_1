// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.

//anonymous function
var secound1 = function (arr){
    function compareNumbers(a,b){
        return b-a;
    }
    arr.sort(compareNumbers);
    console.log(arr[arr.length-2],arr[1]);
}
secound1([34,55,22,6,19,4444,67,90,3333]);                                          //19 3333

//arrow function
var secound2 = (arr)=>{
    function compareNumbers(a,b){
        return b-a;
    }
    arr.sort(compareNumbers);
    console.log(arr[arr.length-2],arr[1]);
}
secound2([34,55,22,6,19,4444,67,90,3333]);                                          //19 3333

//call back function by anonymous
function secound3(abc) {
    console.log("ans : ", abc);                                                     //ans :  [Function (anonymous)]
    abc([2,1,5,4,5]);                                                               //2 5
}
secound3(function(arr){
    function compareNumbers(a,b){
        return b-a;
    }
    arr.sort(compareNumbers);
    console.log(arr[arr.length-2],arr[1]);
})

//call back function by arrow
function secound4(abc) {
    console.log("ans : ", abc);                                                     //ans :  [Function (anonymous)]
    abc([58,62,5,63,87]);                                                           //58 63
}
secound4((arr)=>{
    function compareNumbers(a,b){
        return b-a;
    }
    arr.sort(compareNumbers);
    console.log(arr[arr.length-2],arr[1]);
})
