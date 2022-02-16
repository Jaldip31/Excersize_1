// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

//anonymous function
var matrix1 = function (n){
    for(i=0;i<n;i++)                                                                        
        for(j=0;j<n;j++)                                                                    
            (i==j)?console.log("1"):console.log("0");                                       // 1    0   0                
}                                                                                           // 0    1   0
matrix1(3)                                                                                  // 0    0   1

//arrow function
var matrix2 = (n)=>{
    for(i=0;i<n;i++)
        for(j=0;j<n;j++)
            (i==j)?console.log("1"):console.log("0");
}
matrix2(4)

//call back function by anonymous
function matrix3(abc) {
    console.log("ans : ", abc);                                                     //ans :  [Function (anonymous)]
    abc(3);                                                          
}
matrix3 (function (n){
    for(i=0;i<n;i++)
        for(j=0;j<n;j++)
            (i==j)?console.log("1"):console.log("0");
})

//call back function by arrow
function matrix4(abc) {
    console.log("ans : ", abc);                                                     //ans :  [Function (anonymous)]
    abc(3);                                                          
}
matrix4 ((n)=>{
    for(i=0;i<n;i++)
        for(j=0;j<n;j++)
            (i==j)?console.log("1"):console.log("0");
})
