// Write a function that orders a given array of strings, by length in ascending order as primary criteria,
// and by alphabetical value in ascending order as second criteria.

function solve(array){
    let result = array.sort((a,b) => a.length - b.length || a.localeCompare(b));
    return result.join('\n');
}

console.log(solve(['test', 'Deny', 'omen', 'Default']));
console.log(solve(['alpha', 'beta', 'gamma']));
console.log(solve(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));
