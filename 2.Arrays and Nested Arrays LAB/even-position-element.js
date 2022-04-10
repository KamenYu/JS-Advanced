//Write a function that finds the elements at even positions in an array 
//and returns them on s single line

function even(array){
    let evenPositions = [];
    for(let i = 0; i < array.length; i+=2){
        evenPositions.push(array[i]);
    }

    return evenPositions.join(' ');
}

even([2,33,11,55,32,56,78]);
