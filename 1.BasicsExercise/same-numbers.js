function sameNumbersChecker(number){
    const str = number.toString();
    let isSame = true;
    let sum = 0;
    for(let i = 0; i < str.length; i++){
        
        let current = Number(str[i]);
        let next = str[i+1];
        if(str[i] !== str[i + 1] && next !== undefined){
            isSame = false;
        }
        sum += current;
    }

    return `${isSame}\n${sum}`;
}

console.log(sameNumbersChecker(2222222));
console.log(sameNumbersChecker(1234));