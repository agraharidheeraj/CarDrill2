const findCarById = require('../Problem1');
const inventory= require('../inventory');

const Car33 = findCarById(inventory,33);

if (Car33) {
    console.log(`Car 33 is a ${Car33.car_year} ${Car33.car_make} ${Car33.car_model}`);
} else {
    console.log('Car with ID 33 not found');
}