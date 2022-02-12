// //23. Write a JavaScript function to find the first not repeated character.  Sample arguments : 'abacddbec' Expected output : 'e' 
// var repeat=function(str){
   

//    for(i=0;i<str.length;i++){
//       x=str[0]
//       str=str.replace(str[0],"")

//       if(str.search(x)==-1){}

//       str=str.replaceAll(x,"")
//       console.log(str)

//    }
// }

// repeat("abacdedbc");

// // str="abacdedbc"
// // i=3
// // if(str.includes(str[i])){

// //    console.log("hello");

// // }
// // console.log(true==false)







// // b=str.shift();
// //       console.log(b)
// //       console.log(str)
// //       console.log(str.includes(b))
// //       str.shift()





















// // n="abacdedbc"
// // var repeat=function(n){
// //     n=n.split("")
// //     for(i=0;i<n.length;i++)
// //     {
// //         var count=0
// //         for(j=0;j<n.length;j++)
// //         {
// //             if(n[i]==n[j])
// //             {
// //                 count++
// //                 // console.log("hi")
// //             }
// //         }

// //         if(count<2)
// //         {
// //             result = n[i];
// //             break;
// //         }
// //     }
// //         console.log(result);
// //    }
// // repeat("abacddbec")

function find_firstNotRepeatedChar(str) {
   let count = 0;
   let str2 = "";
   for (let i = 0; i < str.length; i++) {
      // console.log(str)
      let index = str.indexOf(str[i], 0);
      console.log(index)
       while (index != -1) {
           count++;
           index = str.indexOf(str[i], index + 1);  
       }
       if(count === 1) {
          str2 += str[i];
          console.log(str2)
       }
       count=0;
       
   }
   return str2[0];
}
console.log(find_firstNotRepeatedChar('abacddbec'));

// console.log(0 != -1)