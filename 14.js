//14. Write a JavaScript function to convert an amount to coins.  Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) Here 46 is the amount. and 25, 10, 5, 2, 1 are coins. Output : 25, 10, 10, 1.

//anonymous function
var amount_to_coins1 = function(a,c){
    let ans=[];
    for(i=0;i<c.length;++i)   
        while(a>=c[i]){
            a=a-c[i];
            ans.push(c[i]);
        }
    return ans;
}
console.log(amount_to_coins1(46,[25,10,5,2,1]))                                                             //[ 25, 25, 25, 10 ]

//arrow function
var amount_to_coins2 = (a,c)=>{
    let ans=[];
    for(i=0;i<c.length;++i)   
        while(a>=c[i]){
            a=a-c[i];
            ans.push(c[i]);
        }
    return ans;
}
console.log(amount_to_coins2(68,[25,10,5,2,1]))                                                             //[ 25, 25, 10, 5, 2, 1 ]

//call back function by anonymous
function amount_to_coins3(abc) {
    console.log("ans : ", abc);                                                                             //ans :  [Function (anonymous)]
    console.log(abc(68,[50,20,10,5,2,1]));                                                                  //[ 50, 10, 5, 2, 1 ]                               
}
amount_to_coins3 (function(a,c){
    let ans=[];
    for(i=0;i<c.length;++i)   
        while(a>=c[i]){
            a=a-c[i];
            ans.push(c[i]);
        }
    return ans;
})

//call back function by arrow
function amount_to_coins4(abc) {
    console.log("ans : ", abc);                                                                             //ans :  [Function (anonymous)]
    console.log(abc(75,[50,20,10,5,2,1]));                                                                  //[ 50, 20, 5 ]                               
}
amount_to_coins4 (function(a,c){
    let ans=[];
    for(i=0;i<c.length;++i)   
        while(a>=c[i]){
            a=a-c[i];
            ans.push(c[i]);
        }
    return ans;
})

