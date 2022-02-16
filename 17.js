// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

//anonymous function
var test1 = function (str){
    let arra = str.split('');
    let result = {};
    for (let i = 0; i < arra.length; i++) 
        if (arra[i] === " ") continue;
        else result[arra[i]] = arra.filter(e => (e == arra[i])).length ;
    return result;
}
console.log(test1("hello world"));                                                    //{ h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }

//arrow function
var test2 =(str) =>{
    let arra = str.split('');
    let result = {};
    for (let i = 0; i < arra.length; i++) 
        if (arra[i] === " ") continue;
        else result[arra[i]] = arra.filter(e => (e == arra[i])).length ;
    return result;
}
console.log(test2("Skill qode"));                                                    //{ S: 1, k: 1, i: 1, l: 2, q: 1, o: 1, d: 1, e: 1 }

 //call back function by anonymous
 function test3(abc) {
    console.log("ans : ", abc);                                                                            //ans :  [Function (anonymous)]
    console.log(abc("The quick brown fox jumps over the lazy dog"));                                       //{T:1,h:2,e:3,q:1,u:2,i:1,c:1,k:1,b:1,r:2,o:4,w:1,n:1,f:1,x:1,j:1,m:1,p:1,s:1,v:1,t:1,l:1,a:1,z:1,y:1,d:1,g:1}              
}
test3 (function (str){
    let arra = str.split('');
    let result = {};
    for (let i = 0; i < arra.length; i++) 
        if (arra[i] === " ") continue;
        else result[arra[i]] = arra.filter(e => (e == arra[i])).length ;
    return result;
})

 //call back function by arrow
 function test4(abc) {
    console.log("ans : ", abc);                                                                          //ans :  [Function (anonymous)]
    console.log(abc("Java Script"));                                                                     //{ J: 1, a: 2, v: 1, S: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }
}
test4 ((str)=>{
    let arra = str.split('');
    let result = {};
    for (let i = 0; i < arra.length; i++) 
        if (arra[i] === " ") continue;
        else result[arra[i]] = arra.filter(e => (e == arra[i])).length ;
    return result;
})