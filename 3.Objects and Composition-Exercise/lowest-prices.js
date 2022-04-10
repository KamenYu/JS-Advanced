
// function solve(array){
//     let library = {};
  
//     for (const line of array) {
//         let [town, product, price] = line.split(' | ');
//         price = +price;

//         if(!library[product]){
//             library[product] = {town, price};
//         } else {
//             library[product] = library[product].price <= price ? library[product] : {town, price};
//         }                  
//     }

//     let result = [];

//     for (const pr in library) {
//         result.push(`${pr} -> ${library[pr].price} (${library[pr].town})`)
//     }

//     return result.join('\n');
// }


function solve(array){
    let log = [];
 
    for (const line of array) {
        let[town, product, price] = line.split(' | ');
        price = +price;

        let entry = {
            town,
            product,
            price: price,
        };

        if(log.find(x => x.product === product) === undefined){
            log.push(entry);
        } 

        let priceCheck = log.find(x => x.product === product);

        if(priceCheck.price > price){
            priceCheck.price = price;
            priceCheck.town = town;
        }

        let obj = log.find(x => x.product === product && x.town === town);

        if (obj){
            obj.price = price;
        }               
    }
    

    let result = []; 

    for (const line of log) {
        result.push(`${line.product} -> ${line.price} (${line.town})`)
    }

    return result.join('\n');
}


// console.log(solve(['Sample Town | Sample Product | 1000',
// 'Sample Town | Orange | 2',
// 'Sample Town | Peach | 1',
// 'Sofia | Orange | 3',
// 'Sofia | Peach | 2',
// 'New York | Sample Product | 1000.1',
// 'New York | Burger | 10']));

console.log(solve(['Sofia City | Audi | 100000',
'Sofia City | BMW | 100000',
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'New York City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Mexico City | Audi | 100000',
'Washington City | Mercedes | 1000']
));