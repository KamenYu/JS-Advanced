function solve(n,k){

    let ary = [1];
    for(let i = 1; i < n; i++){
        ary[i] = lastKSum(i - 1, k, ary);
    }

    function lastKSum(index, k, array){
        let sum = 0;
        let counter = 0;
        for(let i = index; i >= 0; i--){
            counter ++;
            sum += array[i];

            if(counter == k){
                break;
            }
        }

        return sum;
    }

    return `[${ary.join(', ')}]`;
}
console.log(solve(6,3));
console.log(solve(8,2));
console.log(solve(10,4));
