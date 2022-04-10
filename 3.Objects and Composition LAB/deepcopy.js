const obj = {
    name: 'Lolo',
    lastName: 'Palula',
    age: 37,
}

function deepCopy(target){
    if(Array.isArray(target)){
        return target.map(deepCopy);
    }else if (typeof target == 'object'){
        return [...Object.entries(target)].reduce((a, [k,v]) => Object.assign(a, {[k]: deepCopy(v)}), {});
    } else{
        return target;
    }
}

const another = obj;
console.log(another === obj);
const dCopy = deepCopy(obj);
console.log(dCopy === obj);