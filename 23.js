//23. Write a JavaScript function to find the first not repeated character.  Sample arguments : 'abacddbec' Expected output : 'e' 

// logic-1
//anonymous function  
var no_repeat1 = function (str) {
   let str2 = "";
   for (i = 0; i < str.length; i++) {
      let count = 0;
      let index = str.indexOf(str[i], 0);
      while (index != -1) {
         count++;
         index = str.indexOf(str[i], index + 1);
      }
      (count === 1) ? str2 += str[i] : 0;
   }
   return str2;
}
console.log(no_repeat1('abacddbec'));                                            //e

//arrow function   
var no_repeat2 = (str) => {
   let str2 = "";
   for (i = 0; i < str.length; i++) {
      let count = 0;
      let index = str.indexOf(str[i], 0);
      while (index != -1) {
         count++;
         index = str.indexOf(str[i], index + 1);
      }
      (count === 1) ? str2 += str[i] : 0;
   }
   return str2;
}
console.log(no_repeat2('navagivan'));                                            //gi

//call back function by anonymous    
function no_repeat3(fun){
   console.log("ans : ",fun);                                                    //ans :  [Function (anonymous)]
   console.log(fun("xyabzyxzhab"))                                               //h
}
no_repeat3 (function (str) {
   let str2 = "";
   for (i = 0; i < str.length; i++) {
      let count = 0;
      let index = str.indexOf(str[i], 0);
      while (index != -1) {
         count++;
         index = str.indexOf(str[i], index + 1);
      }
      (count === 1) ? str2 += str[i] : 0;
   }
   return str2;
})

//call back function by arrow
function no_repeat4(fun){
   console.log("ans : ",fun);                                                    //ans :  [Function (anonymous)]
   console.log(fun("malayalam"))                                                 //y
}
no_repeat4 ((str)=> {
   let str2 = "";
   for (i = 0; i < str.length; i++) {
      let count = 0;
      let index = str.indexOf(str[i], 0);
      while (index != -1) {
         count++;
         index = str.indexOf(str[i], index + 1);
      }
      (count === 1) ? str2 += str[i] : 0;
   }
   return str2;
})

//logic-2

var repeat = function (str) {
   let str2 = "";
   for (i = 0; i < str.length; i++) {
      var count = 0 ;
      for (j = 0; j < str.length; j++)
         (str[i] == str[j]) ? count++ : 0;
      (count === 1) ? str2 += str[i] : 0;
   }
   return str2;
}
console.log(repeat("abacddbec"));                                                         //i


