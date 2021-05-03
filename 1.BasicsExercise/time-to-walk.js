function timeToWalk(steps, lengthInM, speedKM){
    const distance = steps * lengthInM;
    const speedInM = speedKM * 1000 / 3600;

    const rest = Math.floor(distance/500)*60;
    const time = distance/speedInM + rest;

    const sec = Math.round(time % 60).toFixed(0).padStart(2, '0');
    const min = Math.floor(time / 60).toFixed(0).padStart(2, '0');
    const hours = Math.floor(min / 60).toFixed(0).padStart(2, '0');

    return `${hours}:${min}:${sec}`;
}

console.log(timeToWalk(4000, 0.6, 5));
console.log(timeToWalk(2564, 0.7, 5.5));