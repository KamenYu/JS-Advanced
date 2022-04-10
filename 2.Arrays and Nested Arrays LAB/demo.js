let array = [8,2,3,4, 6,77,43,123,0];
let arr = ['da', 'ne', 'nje'];

// ...rest operator

let [/*name the variables */ first, second, ...rest] = array;
// this makes copies of the initial array, and the [...variableName] is an operator to take the
// rest of the elements and store them in an array, this does not affect the original array

console.log(first, second, rest);

let [...resty] = array;

let a = 'abc';
let b = 'abc';

let bool = a == b;
console.log(bool);
console.log(array);
console.log(resty);
console.log(resty == array); 

const arry = [1,3,4,5];

arry.splice(1, 0, 2); 
// first number is  start
// second number is if 0 -> insert after start, if more than zero, delete after
// third number/s what to insert

console.log(arry); // 1,2,3,4,5
arry.splice(2,2, 34, 43 );
console.log(arry); // 1, 2, 34, 43, 5


const element = arry.splice(0, 2); // splice returns the elements as an array, even is a single element is there
console.log(element);
console.log(arry); //34, 43, 5
const last = arry.splice(0, 1);
console.log(last);


//SORTING
array.sort();
console.log(array); // sorts them as strings

array.sort(compare);

function compare(a, b){
    return a -b;
}

console.log(array);

// array.sort(function (a, b){
//     return a -b;
// })
//// both valid ways to write it
// array.sort((a, b) => a -b);

let names = ['ala', 'Bala', 'nica', 'mekica'];

names.sort();

console.log(names); // sorts as ascii

names.sort((a,b) => a.localeCompare(b));
names.sort((a,b) => !a.localeCompare(b)); // reverse order

console.log(names);

console.log(array.slice(1,4)); // 0,2,3
console.log(array.slice(4)); 
console.log(array.slice()); // shallow copy
console.log(array.slice(-2)); // last two elements
console.log(array.slice(2,-2)); 

console.log(array.includes(2)); // true
console.log(array.indexOf(2)); // 1
console.log(array.indexOf(543)); // -1

array.forEach((x, i) => console.log(`At position ${i} is ${x}`))

console.log(array.some(x => x== 543)); // false
console.log(array.some(x => x== 43)); // true

const name = names.find(x => x[0] == 'B'); // returns first
console.log(name);

console.log(array.filter(x => x % 2 == 0));
