/**
 * 
 * @param {[]} array 
 */
function solve(array){

    let newArray = array
                    .sort(((a,b) => a-b))
                    .slice(array.length / 2, array.length);

    return newArray;
}

console.log(solve([3,5,6,1,9])); //  9, 6, 5, 3, 1
console.log(solve([2,6,1,92]));     // 92, 6, 2, 1