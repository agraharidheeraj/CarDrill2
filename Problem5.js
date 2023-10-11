function countCarsOlderThan2000(inventory){
    const OlderCars = inventory.filter(car=>car.car_year < 2000);
    return OlderCars.length;
}

module.exports = countCarsOlderThan2000;