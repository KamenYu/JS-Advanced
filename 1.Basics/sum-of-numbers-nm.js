function loopSum(n, m){
    let num1 = Number(n);
    let num2 = Number(m);

    let result = 0;
    for(let i = num1; i <= num2; i++){
        result += i;
    }

    console.log(result);
}

loopSum(9,12); // 42
loopSum(-8, 20); // 174