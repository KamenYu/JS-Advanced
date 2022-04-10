const assArr = {
    'f': 5,
    'sec': 10,
    'thi': 15,
};

// for (const key in assArr) {
//     console.log(`${key} - ${assArr[key]}`);
// }

let keys = Object.keys(assArr);
let values = Object.values(assArr); // returns iterator, NOT array

console.log(keys, values);


let entries = Object.entries(assArr);

for(let key of entries){
    console.log(key);
}

for(let [k, v] of entries){
    console.log('key', k);
    console.log('value', v);
}