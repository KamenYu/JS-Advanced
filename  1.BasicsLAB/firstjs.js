'use strict'; // to throw mistakes, not to allow them to pass

let newValue = 10;
//value = 10; // this throws error

console.log(newValue);

function printStar(count){ // this is the normal way of wirting a function
    console.log("*".repeat(count));
}

printStar(10);

f(3,7,'kola'); // HOISTING, calling a func before declaration

const stars = () =>  { // this is arrow way of writing a function, used in react
    console.log("*".repeat(2));
}

function f(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c); // undefined
}

f(1,2);

function func(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
    
}

func(1,2,3,4,5,6,7);


function printStar(count = 5){ 
    console.log("*".repeat(count));
}

printStar();
printStar(7);
printStar(9);

if(8 > 0){

}else if(5 - 4 < 3){

}else{
    console.long('opaaa');
}
