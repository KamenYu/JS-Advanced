function solve(array){

    let list = {};
    for (const line of array) {
        let [town, population] = line.split(' <-> ');
        population = +population;

        if(list[town] != undefined){
            population += list[town];
        }
        
        list[town] = population;
    }

    for (let [k, v] of Object.entries(list)) {
        console.log(`${k} : ${v}`)
    }
}

console.log(solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']));