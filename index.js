const cars = require('./cars.json');

const cars_after_2010 = cars.filter(item => item.year > 2010);
const red_cars = cars.filter(item => item.color === "Red");

console.log(`Cantidad de autos lanzados despues del año 2010: ${cars_after_2010.length}`);
console.log(`Cantidad de autos rojos: ${red_cars.length}`);

let cars_after_2010_string = [];

cars_after_2010.forEach(item => {
    cars_after_2010_string.push(`${item.brand} - ${item.model} ${item.year}`);
});

console.log(cars_after_2010_string);

cars.forEach(item => {
    item.luxuryTax = ((item.brand === "Jaguar") || (item.brand === "Aston Martin")) ? true : false;
});

const luxuryTax_true_cars = cars.filter(item => item.luxuryTax === true);

console.log(`Cantidad de autos con luxuryTax true = ${luxuryTax_true_cars.length}`);

const autos_año = autosAño(2011);

autos_año.forEach(item => {
    console.log(`${item.model} - ${item.year}`);
});

function autosAño(year){
    return cars.filter(item => item.year === year);
}



