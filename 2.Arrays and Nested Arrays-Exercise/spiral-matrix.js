//TODO Finish

function solve(array){
    let [width, height] = array;
    let matrix = [];

    for(let i = 0; i < width; i++){
        matrix[i] = [];
        for(let j = 0; j < height; j++){
            matrix[i][j] = 0;
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        
        for (let j = 0; j < matrix[i].length; j++) {

                       
        }       
    }

    for (const row of matrix) {
        console.log(row.join(' '));
    }
}