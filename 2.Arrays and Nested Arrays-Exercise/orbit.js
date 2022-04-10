function solve(array){
    const [width, height, x, y] = array;
    let matrix = [];
  
    for(let i = 0; i < width; i++){
        matrix[i] = [];
        for(let j = 0; j < height; j++){
            matrix[i][j] = 0;
        }
    }

    matrix[x][y] = 1;

    for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {

            if (i != x || j != y) {
                matrix[i][j] = Math.max(Math.abs(i - x), Math.abs(y - j)) + 1;
            }            
        }       
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}


solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);
solve([3, 3, 2, 2]);
