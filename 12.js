var perfect_number = function (num)
{
    var a=0,b=num
    while(b>1)
    {
        b = Math.round(b/2)
        a+=b
    }
    (num==a)?console.log("perfect number"):console.log("not perfect number")
}
perfect_number(496)