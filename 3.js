//3. Write a JavaScript function that generates all combinations of a string. 
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

//anonymous function
var test1 = function (str) {
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j <= str.length; ++j)
            console.log(str.slice(i, j));
        // console.log(str.substring(i,j));
    }
}
test1(`dog`);                                                           //d,do,dog,o,og,g   

//arrow function
var test2 = (str) => {
    for (i = 0; i <= str.length; ++i) {
        for (j = i + 1; j <= str.length; j++)
            console.log(str.slice(i, j));
    }
}
test2(`cow`);                                                           //c,co,cow,o,ow,w

//call back function by anonymous
function test3(abc) {
    console.log("ans:", abc);                                           //ans: [Function (anonymous)]
    abc("cat");                                                         //c,ca,cat,a,at,t
}
test3(function (str) {
    for (i = 0; i <= str.length; i++) {
        for (j = i + 1; j <= str.length; j++)
            console.log(str.slice(i, j));
    }
})

//call back function by arrow
function test4(abc) {
    console.log("ans:", abc);                                           //ans: [Function (anonymous)]
    abc("wolf");                                                        //w,wo,wol,wolf,o,ol,olf,l,lf,f
}
test4((str) => {
    for (i = 0; i <= str.length; i++) {
        for (j = i + 1; j <= str.length; j++);
        console.log(str.slice(i, j));
    }
})






