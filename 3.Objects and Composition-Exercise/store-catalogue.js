function solve(array){
    let arr = [];

    for (const line of array) {
        let [name, price] = line.split(' : ');
        price = +price;

        let entry = {
            name,
            price
        }

        if(!arr.find(x => x.find(y => y.name[0] === name[0]))){
            arr[arr.length] = [entry];
        } else{
            arr.find(x => x.find(y => y.name[0] === name[0])).push(entry);
        }
    }

    result = arr.sort((a, b) => a[0].name.localeCompare(b[0].name));

    for (let line of result) {
        console.log(line[0].name[0]);

        let sorted = line.sort((a,b)=> a.name.localeCompare(b.name));

        for (let res of sorted) {
            console.log(`  ${res.name}: ${res.price}`)
        }
    }    
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);