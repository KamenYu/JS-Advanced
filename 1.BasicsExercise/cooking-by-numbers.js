function solve(startNum, c1, c2, c3, c4, c5){
    let num = Number(startNum);

    const array = [c1, c2, c3, c4, c5];

    for(let i = 0; i < array.length; i++){
        switch(array[i]){
            case 'chop': num /= 2;break;
            case 'dice': num = Math.sqrt(num); break;
            case 'spice': num += 1; break;
            case 'bake': num *= 3; break;
            case 'fillet': num -= num * 0.2; break;            
        }
        console.log(num);
    }
}

console.log(solve('32', 'chop', 'chop', 'chop', 'chop', 'chop'));
console.log(solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet'));