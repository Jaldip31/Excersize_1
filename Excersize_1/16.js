//16. Write a JavaScript function to extract unique characters from a string.  Example string : "thequickbrownfoxjumpsoverthelazydog" Expected Output : "thequickbrownfxjmpsvlazydg

var repeat1=function(str,q){
    return str.replaceAll(q,"");
}
 console.log(repeat1("thequickbrownfoxjumpsoverthelazydog","e"));                                        //thquickbrownfoxjumpsovrthlazydog

 var repeat2=(str,q)=>{
    return str.replaceAll(q,"");
}
 console.log(repeat2("Java Script","a"));                                                                //Jv Script


 //call back function by anonymous
function repeat3(abc) {
    console.log("ans : ", abc);                                                                          //ans :  [Function (anonymous)]
    console.log(abc("Skill Qode","l"));                                                                  //Ski Qode                            
}
repeat3 (function(str,q){
    return str.replaceAll(q,"");
})

 //call back function by arrow
 function repeat4(abc) {
    console.log("ans : ", abc);                                                                          //ans :  [Function (anonymous)]
    console.log(abc("Hello world","o"));                                                                 //Hell wrld                           
}
repeat4 ((str,q)=>{
    return str.replaceAll(q,"");
})