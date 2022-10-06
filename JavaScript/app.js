let input = prompt("Hey! Say Something");

while(true)
{
    input = prompt(input);
    if(input === "STOP")
    break;
}

console.log("You Win...")