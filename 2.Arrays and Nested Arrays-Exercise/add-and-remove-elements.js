function solve(commands){
    let array = [];
    let num = 0;
    for (let i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case 'add':
                array.push(++num)
                break;
        
            case 'remove':
                ++num;
                array.pop();
                break;
        }
        
    }

    let result = array.length == 0 ? 'Empty' : array.join('\n');

    return result;
}

console.log(solve(['add','add','add','add']));
console.log(solve(['add','add','remove', 'add','add']));
console.log(solve(['remove','remove','remove']));