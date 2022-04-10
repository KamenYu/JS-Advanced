function solve(array, step){
    let newArray = [];
    for(let i = 0; i < array.length; i += step){
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(solve(['5', '20', '31', '4', '20'], 2));
console.log(solve(['abv', 'vbv', 'vvb', 'bba', 'bbv', 'aab', 'vba'], 3));
console.log(solve(['1', '2', '3', '4', '5'], 6));