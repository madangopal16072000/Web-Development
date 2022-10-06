const add = (x, y) => {
    return x + y;
}

console.log(add(5, 6));

// arrow function implicit return

const mul = (x, y) => x*y;

console.log(mul(2,5));

const rollDie = () => (
    Math.floor(Math.random()*6) + 1
);

console.log(rollDie())