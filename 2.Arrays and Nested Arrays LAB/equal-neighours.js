function pairs(matrix){
    let p = 0;
    let previous = [];
    matrix.forEach(row => 
        {
            for (let index = 0; index < row.length; index++) {
                if (index <= row.length - 1 && row[index] === row[index + 1]) {
                    p++;
                }
                if (row[index] === previous[index]) {
                    p++;
                }
        }
            previous = row;
        });    

    return p;
}

console.log(pairs([
    ['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']
]));

console.log(pairs([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]));