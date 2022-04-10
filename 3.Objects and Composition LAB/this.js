const obj = {
    firstName: 'Kamen',
    lastName: 'Yu',
    fullName(){
        return `${this.firstName} ${this.lastName}`;
        // use this because it points to firstName and LastName
    }
}

console.log(obj.fullName()); // this works because it is attatched to the object

const func = obj.fullName;

console.log(func()); 
// this does not work beacuse it is detatched from the obket and the variables look at the global scope

const person = {
    firstName: 'Nadezhda',
    lastName: 'Dincheva',
};

person.fullName = func;

console.log(person.fullName());
// this works because the function is attatched to an obj
// in this way a function can be shared between many objects, NO inheritance