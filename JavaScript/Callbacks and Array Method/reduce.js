let prices = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

// let sum = prices.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// })

// console.log(sum);

let max = prices.reduce((max, currentValue) => {
    return currentValue > max ? currentValue : max;
})