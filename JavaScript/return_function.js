function mystery()
{
    const rand = Math.random();

    if(rand > 0.5)
    {
        return function()
        {
            console.log("Congrats! you succeed");
        }
    }
    else
    {
        return function()
        {
            alert("You are infected by virus!");
            alert("Do not try to close this window");
            alert("Do not try to close this window");
            alert("Do not try to close this window");
            alert("Do not try to close this window");
        }
    }
}