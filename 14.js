var amount_to_coins = function(a,b)
{
    var c=[]
    for(i=0;a>0;i++)
    {    
        while(a>=b[i])
        {
            a=a-b[i]
            c.push(b[i])
        }
    }
    return c
}
console.log(amount_to_coins(85,[25,10,5,2,1]))         //[ 25, 25, 25, 10 ]


