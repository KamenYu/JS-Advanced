function solutionOne(a,b,c,){
    let result = Math.max(a, Math.max(b,c));
    console.log(`The largest number is ${result}.`);
}

solutionOne(4, 67, 876);

let result;
function solutionTwo(a,b,c){
    if(a > b && a > c){
         result = a;
    }else if (b > a && b > c){
         result = b;
    }else if (c > a && c > b){
         result = c;
    }

    console.log(`The largest number is ${result}.`)
}

solutionTwo(4, -67, 76);