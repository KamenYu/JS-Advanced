function solve(pieArray, startPie, endPie){
    const start = pieArray.indexOf(startPie);
    const end = pieArray.indexOf(endPie);
    const newA = pieArray.slice(start, end + 1);

    return newA;
}

console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie', 'Smoked Fish Pie'));