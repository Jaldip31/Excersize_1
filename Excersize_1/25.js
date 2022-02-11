var Longest_Country_Name = function (x)
{
    max = -1
    for (i = 0; i < x.length; i++) 
    {
        if (x[i].length > max) 
        {
            max = x[i].length
            word = x[i]
        }
    }
    return word
}
console.log(Longest_Country_Name(["Australia", "Germany","United states of america"]))
