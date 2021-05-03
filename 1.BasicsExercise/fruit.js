'use strict';

function fruitMoney(fruit, grams, price){

    const weight = grams / 1000;
    const totalMoney = weight * price;
    return `I need $${totalMoney.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${fruit}.`;
}

console.log(fruitMoney('orange', 2500, 1.80));
console.log(fruitMoney('apple', 1563, 2.35));