let targetNum = Math.floor(Math.random()*10);
let guess = Math.floor(Math.random()*10);

while(targetNum !== guess)
{
    console.log(`Guessed : ${guess} Incorrect`);
    guess = Math.floor(Math.random()*10);
}

console.log(`Correct! Guessed : ${guess} & target was : ${targetNum}`);