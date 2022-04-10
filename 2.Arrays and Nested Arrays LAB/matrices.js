let matrix = [  [1,2,3],
                [33,44,55],
                [12,443,63],
                [2],
                [45, 67] ];


let result = matrix.reduce(reducer);


/**
 * 
 * @param {[]} acc 
 * @param {[]} el 
 */

function reducer(acc, el){
    return acc.concat(el);
}

console.log(result);