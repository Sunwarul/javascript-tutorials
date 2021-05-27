const arr = ['P-23432', 'P-23432', 'P-234', 'Q-23432', '2343-P-2342'];

const productIds = arr.filter(function (item) {
    return item.indexOf('P-') === 0;
})


console.log(productIds);