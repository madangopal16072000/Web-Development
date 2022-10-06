let max = parseInt(prompt("Enter maximum number : "));

while(!max)
max = parseInt(prompt("Enter valid number : "));

let targetNum = Math.floor(Math.random()*max) + 1;

let guess = prompt("Enter your guess : ");
let count = 1;
while(parseInt(guess) != targetNum)
{
    count++;
    if(guess < targetNum)
    guess = prompt("Too Low! Enter another number : ");
    else
    guess = prompt("Too High! Enter another number : ");
}

console.log(`You Win...It took you ${count} guesses`);
