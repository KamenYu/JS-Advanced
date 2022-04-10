//Write a JS function that return the elements at odd positions from the array
//doubled and in reverse order
/**
 * 
 * @param {[]} array 
 */
function solve(array){
    let newArray = [];
    for(let i = 1; i < array.length; i+=2){
        newArray.push(array[i]);
    }
    ;
    return newArray.map(x => x * 2).reverse().join(' ');
}

console.log(solve([3, 0, 10, 4, 7, 3]));
console.log(solve([10, 15, 20, 25]));