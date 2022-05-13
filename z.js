var test =function(str){
    var count=0
    while(i=count<str.length){
        let ans="";
        for(j=i+1;j<str.length;j++){
            if(str.slice(i,j).search(str[j])==-1){
                ans+=str[j]
                count++
            }
        }
        // console.log(str(2))
        console.log(ans);
    }
}

test("abcxyzabc")
// str="abcxyzabxy"
// arr=['a','b']
// console.log((arr.search(0)))
// abcxyzabc