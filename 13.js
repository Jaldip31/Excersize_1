var factors = function(a){
    var arr=[]
    for(i=2;i<a;i++)
    {
        if(a%i==0)
        {
            arr.push(a/i)
        }
    }
    console.log(arr)
}
factors(10)
