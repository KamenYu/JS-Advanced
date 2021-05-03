

function solve(text){

    let words = text
    .toUpperCase()
    .match(/[a-zA-Z0-9]*/g) 
    // g is for global, and needs to be added, other flags may be used as well
    .filter(x => x != '');

    return words.join(', ');   
}

console.log(solve('Hello, is this the person I am looking for?'))
console.log(solve('Fat - diabetes type II'));
console.log(solve('Nevermind..., um!? Hel-lo[]{}'));