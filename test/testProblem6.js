const filterBMWAndAudiCars = require('../Problem6');
const inventory = require('../inventory');


const bmwAndAudiCars = filterBMWAndAudiCars(inventory);

console.log(JSON.stringify(bmwAndAudiCars, null, 2));
