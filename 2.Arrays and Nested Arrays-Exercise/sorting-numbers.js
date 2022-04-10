//Write a function that sorts an array of numbers so that the first element is the smallest one,
//the second is the biggest one, the third is the second smallest one and so on. 
//Return the resulting array.

function solve(array){
    let current = array.slice(0).sort((a,b) => a-b);
    let finalArray = [];
    
    for(let i = 0; i < array.length; i++){

        let num = 0;

        if(i % 2 == 0){
            num = current.shift();
        } else{
            num = current.pop();
        }

        finalArray.push(num);
    }

    return finalArray;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));