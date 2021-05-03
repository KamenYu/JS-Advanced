function calculateStringLength(a,b,c){
    let total = 0;
    total += a.length;
    total += b.length;
    total += c.length;
    console.log(total);

    let average = Math.floor(total / 3);
    console.log(average);
}

calculateStringLength('baba', 'buba', 'baya');

function calculateStringLength(a,b,c){
    let total = a.length + b.length + c.length;
    console.log(total);

    console.log(Math.floor(total / 3));
}

calculateStringLength('o', '65.098', 'baya');