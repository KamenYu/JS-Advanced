function solve(array){
    let calories = {};

    for (let i = 0; i < array.length; i += 2){
        calories[array[i]] = +array[i+1];
    }

    return calories;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));