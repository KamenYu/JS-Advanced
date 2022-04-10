function smallestTwo(array){
    array.sort((a,b) => a-b);
    
    return `${array[0]} ${array[1]}`;
}

console.log(smallestTwo([30, 15, 50, 5]));
console.log(smallestTwo([3, 0, 10, 4, 7, 3]));
console.log(smallestTwo([30, 15, -2, 973, 100, -1000]));