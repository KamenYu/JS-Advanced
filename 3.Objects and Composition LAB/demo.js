let myObj = {
    name: 'Kamen',
    age: 30,
    weight: 75,
    eyeColour: 'green',
    'hair Colour': 'chesnut', // if a key must be with a specail symbol or whitespace
};

console.log(myObj);
console.log(myObj.eyeColour);

myObj.weight = 80;
console.log(myObj.weight);
console.log(myObj['age']);

myObj.nationality = 'Bulgaria'; // to add nonexisting prop
console.log(myObj);
//or
myObj['belief'] = 'agnostic';
console.log(myObj);

let prop = 'hair Colour';
delete myObj.nationality;
delete myObj[prop];

console.log(myObj);
console.log('---------------------------------------');

let thisObj = {
    size: 'big',
    height: 'tall',
    volume: 'a lot',
}

let { volume, size } = thisObj; // destructuring syntax  
// ``size: thisSize renames`` the value name , but it stays unchanged in the object

console.log(volume, size);