// 24. Write a JavaScript function to apply Bubble Sort algorithm.  Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order". Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213] Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1] 
//anonymous function
var Bubble_Sort1 = function (arr){
    for(i=0;i<arr.length;i++)
        for (let j = 0; j < arr.length; j++) 
            if(arr[i]<arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
    return arr;
}
console.log(Bubble_Sort1([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));      // [1,   4,   9,  12,   23,64,  84,  98, 122,  213,234, 345, 455, 546, 3223]

//arrow function
var Bubble_Sort2 = (arr)=>{
    for(i=0;i<arr.length;i++)
        for (let j = 0; j < arr.length; j++) 
            if(arr[i]<arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
    return arr;
}
console.log(Bubble_Sort2([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));       // [1,   4,   9,  12,   23,64,  84,  98, 122,  213,234, 345, 455, 546, 3223]

//call back function by anonymous
function Bubble_Sort3(abc) {
    console.log("ans : ", abc);                                                                 //ans :  [Function (anonymous)]
    console.log(abc([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));        // [1,   4,   9,  12,   23,64,  84,  98, 122,  213,234, 345, 455, 546, 3223]                                        
}
Bubble_Sort3 (function (arr){
    for(i=0;i<arr.length;i++)
        for (let j = 0; j < arr.length; j++) 
            if(arr[i]<arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
    return arr;
})

//call back function by arrow
function Bubble_Sort4(abc) {
    console.log("ans : ", abc);                                                                 //ans :  [Function (anonymous)]
    console.log(abc([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));        // [1,   4,   9,  12,   23,64,  84,  98, 122,  213,234, 345, 455, 546, 3223]                                    
}
Bubble_Sort4 ((arr)=>{
    for(i=0;i<arr.length;i++)
        for (let j = 0; j < arr.length; j++) 
            if(arr[i]<arr[j]){
                temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
    return arr;
})