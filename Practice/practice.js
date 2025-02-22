const numbers = [-10, 20, -30, 40, -50];

let afterRemove = numbers.filter((value) =>{
    if(value>0){
        return value;
    }
});

let doubleValue = afterRemove.map((val) =>{
    return val * 2;
});


let sum = doubleValue.reduce((accu, current) => {
    return accu + current;
})

console.log(sum );


const sales = [
    {id: 1, product: 'Laptop', amount: 1500, Category: 'Electronics'},
    {id: 2, product: 'Phone', amount: 800, Category: 'Electronics'},
    {id: 3, product: 'Mouse', amount: 50, Category: 'Accessories'},
    {id: 4, product: 'Monitor', amount: 300, Category: 'Electronics'},
    {id: 5, product: 'Keyboard', amount: 100, Category: 'Accessories'},
    {id: 6, product: 'USB Cable', amount: 20, Category: 'Accessories'}
];

let removeTransaction = sales.filter((value) =>{
    return value.amount>=100;
});

let releventCatagories = removeTransaction.map((val) =>{
    return val = {
        product: val.product, 
        amount: val.amount
    }
});


let sum2 = releventCatagories.reduce((accu, current) => {
    return accu + current.amount;}, 0)
console.log(`The sum of sales amount after reduce: ${sum2}`);