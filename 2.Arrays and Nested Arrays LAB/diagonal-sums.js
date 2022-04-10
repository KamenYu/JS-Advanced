//Write a function that finds the sum at the main and at the secondary diagonals.
//First print the sum at the main diagonal, then the sum at the secondary diagonal.

function solve(matrix){
    let main = 0;
    let sec = 0;

    for(let i = 0; i < matrix.length; i++){
        main += matrix[i][i];
        sec += matrix[i][matrix.length - i - 1];
    }

    return `${main} ${sec}`;
}

console.log(solve(
    [[20, 40],
    [10, 60]
]));
console.log(solve(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]));
