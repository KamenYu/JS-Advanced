function solve(){

    let arr = [];

    function add(el){
        arr.push(el);
        this.size++;
        sort();
    }
    function remove(index){
        if(index >= 0 && index < arr.length){
            arr.splice(index, 1);
            this.size--;
            sort();
        }
    }
    function get(index){
        if(index >= 0 && index < arr.length){
            return arr[index]
        }
    } 
    function sort(){ arr.sort((a,b) => (a - b)) }

    return {
        size: 0,
        add,
        remove,
        get,
    }  
}

let list = solve();
list.add(5);
list.add(6);
list.add(7);
list.add(2);
console.log(list.get(1));
console.log(list.size);