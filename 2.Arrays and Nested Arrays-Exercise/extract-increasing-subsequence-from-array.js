function solve(array){
    let sequence = [];
    let num = Number.NEGATIVE_INFINITY; 
    for (const el of array) {
        if(el >= num){
            sequence.push(el);
            num = el;
        }
    }

    return sequence;
}

console.log(solve([1,3,12,4,67,34,78,99,0,-1,565])); // 1,3,12,67,78,99,565