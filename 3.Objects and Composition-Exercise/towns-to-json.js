function solve(array){

    let log = [];
    let sliced = array.slice(1, array.length);
    for (const row of sliced) {

        let [Town, Latitude, Longitude] = row.split('|').map(x => x.trim()).filter(x => x.length > 0);
        Latitude = Number(Number(Latitude).toFixed(2));
        Longitude = Number(Number(Longitude).toFixed(2));
        let line = {
            Town,
            Latitude,
            Longitude,
        };

        log.push(line);
    }

    return JSON.stringify(log);

}

console.log(solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']));