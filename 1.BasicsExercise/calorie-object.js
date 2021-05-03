function solve(stringArray){

    let arr = [stringArray.length / 2];
    let j = 0;

    function getString(good, calories){
        return `${good}: ${calories}`;
    }

    for(let i = 0; i < stringArray.length; i += 2){      
        arr[j] = getString(stringArray[i], stringArray[i+1]);
        j++;
    }

    return `{ ${arr.join(', ')} }`;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));