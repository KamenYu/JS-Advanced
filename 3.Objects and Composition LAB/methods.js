const myObj = {
    colour: 'gray',
    area: 300,
    type: 'square',
    log: function() {
        console.log(`The object is ${this.type}, with colour ${this.colour} and area ${this.area} cm2`); 
    },
}

myObj.log();

//an obj can be a function library like Math, Object, Number and so on

const compareNumbers = {
    ascending: (a,b) = a - b,
    descending: (a,b) = b - a,
}