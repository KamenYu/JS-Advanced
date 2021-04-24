

function circleArea(raduis){

    if (typeof raduis === 'number'){
        
        let res = Math.PI * raduis * raduis;
        console.log(res.toFixed(2));
        
    }else{
        console.log(`We can not calculate the circle area, because we receive a ${typeof raduis}.`)
    }
}

circleArea(NaN);
circleArea(5);
circleArea(10);
circleArea(false);
circleArea('car');
circleArea(undefined);
circleArea(null);