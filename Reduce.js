const numbers = [1, 2, 3];

const numbersSum = numbers.reduce(function (sum, item) {
    return sum + item;
}, 0);

console.log(numbersSum);