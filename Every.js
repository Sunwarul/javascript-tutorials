const numbers = ['Mr John', 'Mr Nazmul', 'Mr. Hossain'];

const oddNumbers = numbers.every(function (item) {
    return item.indexOf('Mr') > -1;
});

console.log(oddNumbers ? 'All are men' : 'Some women are there!');