const findLastCar= require('../Problem2');
const inventory= require('../inventory');

const lastCar= findLastCar(inventory);


console.log(`Last car is a ${lastCar.car_make} ${lastCar.car_model}`);