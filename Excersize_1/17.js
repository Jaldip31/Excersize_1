// var test1 = function (str){
//     for (let i = 0; i < str.length; i++) {
        
//     }


// }
// console.log(test1("Helol World"));

function occurrences(str)
{
    let arra = str.split('')
    let result = {}

    for (let i = 0; i < arra.length; i++) {
        if (arra[i] === " ") continue
        else result[arra[i]] = arra.filter(e => (e == arra[i])).length 
    }
    return result
}
console.log(occurrences("hello world"))