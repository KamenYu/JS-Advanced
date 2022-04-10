let myArr = [3,56,7,8];

let arr = [2,6,178];

let result = myArr.reduce(sumReducer, 0)
let result = myArr.reduce((acc, el) => acc + el, 0)
let average = myArr.reduce((acc, el, index, a) => acc + el / a.length, 0)
let max = myArr.reduce((acc, el) => Math.max(acc, el), 0);
let max = myArr.reduce((acc, el) => acc > el ? acc : el);

function sumReducer(acc, el){
    return acc + el;
}

console.log(result);