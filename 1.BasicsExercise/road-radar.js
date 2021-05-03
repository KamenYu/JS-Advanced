
function radar(currentSpeed, area){

    const speed = Number(currentSpeed);
    let message = '';
    let limit = 0;

    switch(area){
        case 'motorway': limit = 130; break;
        case 'interstate': limit = 90; break;
        case 'city': limit = 50; break;
        case 'residential': limit = 20; break;
    }

    if(speed <= limit){
        message = `Driving ${speed} km/h in a ${limit} zone`
    }
    else{
        const difference = currentSpeed - limit;

        let status = '';

        if(difference <= 20){
            status = 'speeding';
        } else if(difference > 20 && difference <= 40){
            status = 'excessive speeding';
        } else{
            status = 'reckless driving';
        }

        message = `The speed is ${difference} km/h faster than the allowed speed of ${limit} - ${status}`
    } 
    
    return message;
}

console.log(radar('40', 'city'));
console.log(radar('21', 'residential'));
console.log(radar('120', 'interstate'));
console.log(radar('200', 'motorway'));
