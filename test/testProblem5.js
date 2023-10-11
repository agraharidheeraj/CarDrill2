const countCarsOlderThan2000 = require('../Problem5');
const inventory = require('../inventory');

const CarOlderThan2000 = countCarsOlderThan2000(inventory);

console.log(`${CarOlderThan2000} cars are older than 2000.`);