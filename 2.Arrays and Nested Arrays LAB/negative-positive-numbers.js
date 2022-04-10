function solve(array){
    let ary = [];
    for(const element of array){
        element >= 0 ? ary.push(element) : ary.unshift(element);
    }

    return ary.join('\n');
}

console.log(solve([7, -2, 8, 9]));
console.log(solve([3, -2, 0, -1]));
console.log(solve([7, -2, 0, -13, 103, 984]));