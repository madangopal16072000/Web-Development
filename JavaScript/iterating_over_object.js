let testScores = {
    madan : 100,
    mohan : 95,
    ram : 90,
    shyam : 85,
    gagan : 80,
    raman : 75
};

for(let key in testScores)
{
    console.log(key);
}

console.log(Object.keys(testScores))
console.log(Object.values(testScores))
console.log(Object.entries(testScores));
let sum = 0;
for(let x of Object.values(testScores))
sum = sum + x;

console.log(sum);