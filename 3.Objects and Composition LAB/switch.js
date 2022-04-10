//switch is rarely used, and is not good for unit testing, thus

let count = 5;

const parser = {
    increment() {count++},
    decrement() {count--},
    reset() {count = 0},
}

let command = null; // increment, decrement, reset

parser[command]();