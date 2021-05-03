function greatestCommonDivisor(a,b){
     while(b != 0){
         let t = b;
         b = a % b;
         a = t;
     }

    return a;
}

console.log(greatestCommonDivisor(15,5));
console.log(greatestCommonDivisor(2154,458));
console.log(greatestCommonDivisor(66,55));