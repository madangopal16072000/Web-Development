
function callTwice(func)
{
    func();
    func();
}

function rollDie()
{
    let roll = Math.floor(Math.random()*6) + 1;
    console.log(roll);
}

callTwice(rollDie);