// 90 / 100
function solve(moves){
    let initialMatrix = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let firstPlayer = 'X';
    let secondPlayer = 'O';

    let counter = 0;
    let winner = false;
    let xCounter = 0;
    let oCounter = 0;

    while(winner === false && counter < 9){
        let x = +moves[counter][0];
        let y = +moves[counter][2];
        counter++;

        if(initialMatrix[x][y] !== false){
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        if(xCounter === oCounter){
            initialMatrix[x][y] = firstPlayer;
            xCounter++;
        } else{
            initialMatrix[x][y] = secondPlayer;
            oCounter++;
        }

        if (counter >= 2){
            checkRows(initialMatrix, firstPlayer);
            checkRows(initialMatrix, secondPlayer);
            checkCols(initialMatrix, firstPlayer);
            checkCols(initialMatrix, secondPlayer);
            checkDiags(initialMatrix, firstPlayer);
            checkDiags(initialMatrix, secondPlayer);            
        }
    }

    if(winner || counter === 9){

        if(winner === false && counter === 9){
            console.log('The game ended! Nobody wins :(');
        }
        
        for (let i = 0; i < initialMatrix.length; i++) {
            
            console.log(initialMatrix[i].join('\t'));
            
        }
    }

    function checkRows(initialMatrix, player){
        initialMatrix.forEach(el => {                
            winnerChecker(el, player)
        });
    }

    function checkCols(initialMatrix, player){
        let col = [];
        for(let i = 0; i < initialMatrix.length; i++){
            for(let j = 0; j < initialMatrix[i].length; j++){

                col.push(initialMatrix[j][i]);
             
            }
            winnerChecker(col, player);
            col = [];
        }
    }

    function checkDiags(initialMatrix, player){
        let mainD = [];
        let secD = [];
        for (let i = 0; i < initialMatrix.length; i++) {
            mainD[i] = initialMatrix[i][i];
            secD[i] = initialMatrix[i][initialMatrix.length - i - 1];
        }

        winnerChecker(mainD, player);
        winnerChecker(secD, player);        
    }

    function winnerChecker(array, player){
        if(array.every(x => x === player)){
            console.log(`Player ${player} wins!`)
            winner = true;
        }
    }
}




// console.log(solve(
// [
// "0 1",
// "0 0",
// "0 2",
// "2 0",
// "1 0",
// "1 1",
// "1 2",
// "2 2",
// "2 1",
// "0 0"
// ]));

// console.log(solve(
// [
//     "0 0",
//     "0 0",
//     "1 1",
//     "0 1",
//     "1 2",
//     "0 2",
//     "2 2",
//     "1 2",
//     "2 2",
//     "2 1"
// ]));

console.log(solve(
[
 "0 1",
 "0 0",
 "0 2",
 "2 0",
 "1 0",
 "1 2",
 "1 1",
 "2 1",
 "2 2",
 "0 0"
]));

