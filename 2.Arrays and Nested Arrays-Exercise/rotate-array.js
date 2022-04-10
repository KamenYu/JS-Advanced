function rotate(array, rounds){
    if(rounds % array.length !== 0){
        rounds = rounds % array.length;        
    }
    array.unshift(array.splice(array.length - rounds,rounds));

    function reducer(acc, c){
        return acc.concat(c);
    }

    return array.reduce(reducer).join(' ');
}

console.log(rotate(['Banana', 'Orange', 'Coconut', 'Apple'], 15));
console.log(rotate(['1','2', '3','4'], 2));