function solve(matrix){

    let parsed = [];

    for(let i = 0; i < matrix.length; i++){
        parsed[i] = matrix[i].split(' ').map(Number);
    }

    let mainD = 0;
    let secD = 0;

    for(let i = 0; i < parsed.length; i++){
        mainD += parsed[i][i];
        secD += parsed[i][parsed.length - i - 1];
    }

    if(mainD === secD){
        for(let i = 0; i < parsed.length; i++){
            for(let j = 0; j < parsed[i].length; j++){
                if(i === j || i + j === parsed[i].length - 1 ){
                    continue;
                }
                parsed[i][j] = mainD;
            }
        }
    }
        
    for (const row of parsed) {
        console.log(row.join(' '));
    }
}

console.log(solve(
[
'5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1'
]));

console.log(solve(
[
'1 1 1',
'1 1 1',
'1 1 0'
]));