function operations(num1, num2, mathSymbol){

    let result;
    switch(mathSymbol){
        case'+': result = num1 + num2; break;
        case'-': result = num1 - num2; break;
        case'*': result = num1 * num2; break;
        case'/': result = num1 / num2;break;
        case'%': result = num1 % num2; break;
        case'**': result = num1**num2; break;
    }

    console.log(result);
}

operations(9, 8, '*'); // 72
operations(2, 10, '-'); // -8
operations(1, 8, '+'); // 9
operations(72, 3, '/'); // 24
operations(9, 8, '%'); // 1
operations(2, 3, '**'); // 8

