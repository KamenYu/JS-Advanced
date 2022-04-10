function sortingNames(array){
    array.sort((a,b) => a.localeCompare(b));
    let index = 1;
    let newArray = [];
    for (let el of array) {
        newArray.push(`${index}.${el}`);
        index++;
    }
    return newArray.join('\n');
}

console.log(sortingNames(["John", "Bob", "Christina", "Ema"]));