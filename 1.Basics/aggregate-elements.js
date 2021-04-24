function aggregateElements(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b)=>a + b);
    aggregate(elements, 0, (a, b)=>a + 1 / b); // this i do not understand
    aggregate(elements, "", (a, b)=>a + b);
 
    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}

function aggregate(input){

    let sum = 0;

    for(let i = 0; i < input.length; i++){
        sum += input[i];
    }

    console.log(sum)

    let concatenated = '';

    for(let i = 0; i < input.length; i++){
        concatenated += input[i];
    }

    console.log(concatenated);

    let inverse = 0;

    for(let i = 0; i < input.length; i++){
        inverse += input[i] + 1 / input[i + 1];
    }

    console.log(inverse);

}

aggregate([1,2,3]);
