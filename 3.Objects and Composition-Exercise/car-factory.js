function solve(order){
    const smallEngine = {power: 90, volume: 1800};
    const normalEngine = {power: 120, volume: 2400};
    const monsterEngine = {power: 200, volume: 3500};

    let carEngine = {};

    if(order.power <= 90){
        carEngine = smallEngine;
    } else if ( order.power > 90 && order.power <= 120){
        carEngine = normalEngine;
    } else {
        carEngine = monsterEngine;
    }

    let wheelSize = order.wheelsize % 2 == 0 ? --order.wheelsize : order.wheelsize;
    let wheelArray = [0,0,0,0];
    wheelArray.fill(wheelSize, 0, 4);

    let car = {
        model: order.model,
        engine: carEngine,
        carriage: {type: order.carriage, color: order.color},
        wheels: wheelArray,
    };

    return car;  
}

console.log(solve({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }));

console.log(solve({ model: 'Opel Vectra',
power: 110,
color: 'grey',
carriage: 'coupe',
wheelsize: 17 }));