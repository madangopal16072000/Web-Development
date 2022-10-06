function makeFunctionBetween(min, max)
{
    return function(num)
    {
        if(num >= min && num <= max)
        return true;
        else
        return false;
    }
}

const isBetween = makeFunctionBetween(100, 200);

console.log(isBetween(150));
console.log(isBetween(50));