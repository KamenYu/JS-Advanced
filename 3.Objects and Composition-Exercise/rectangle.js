function solve(w,h,c){
    width = Number(w);
    height = Number(h);
    color = c[0].toUpperCase() + c.slice(1);

    let rectangle = {
        width,
        height,
        color,
        calcArea() {
            return width * height;
        },
    };

    return rectangle;
}

let rect = solve(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());