//15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

//anonymous function
var power1 = function(b,n){
        let ans = 1;
        for (i =1; i <= n; i++)
            ans = b * ans;        
        return ans;
}
console.log(power1(2, 3));                                                  //8

var power2 = (b,n)=>{
    let ans = 1;
    for (i =1; i <= n; i++)
        ans = b * ans;        
    return ans;
}
console.log(power2(3, 5));                                                  //243

//call back function by anonymous
function power3(abc) {
    console.log("ans : ", abc);                                             //ans :  [Function (anonymous)]
    console.log(abc(3,3));                                                  //27
}
power3 (function(b,n){
    let ans = 1;
    for (i =1; i <= n; i++)
        ans = b * ans;        
    return ans;
})

//call back function by arrow
function power4(abc) {
    console.log("ans : ", abc);                                             //ans :  [Function (anonymous)]
    console.log(abc(4,6));                                                  //4096
}
power4 ((b,n)=>{
    let ans = 1;
    for (i =1; i <= n; i++)
        ans = b * ans;        
    return ans;
})