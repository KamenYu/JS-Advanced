//A matrix is magical if the sums of the cells of every row and every column are equal. 

function solve(matrix){
    let rowSums = [];
    let colSums = [];

    matrix.forEach(element => {
        let sum = element.reduce((a,b) => a+b);
        rowSums.push(sum);
    });

    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
         colSums[j] = (colSums[j] || 0) + matrix[i][j];
        }
    }

    let rowRes = rowSums.every(x => x === rowSums[0]); 
    let colRes = colSums.every(x => x === colSums[0]); 
    let rowCol = rowSums.every(x => x === colSums[0]);

    let result = rowRes && colRes && rowCol ? 'true' : 'false';

    return result;   
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));
console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));
console.log(solve([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]));
console.log(solve([
    [1, 2, 0],
    [2, 0, 1],
    [0, 1, 2]
]));