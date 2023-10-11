function filterBMWAndAudiCars(inventory){
    const BMWAndAudiCar= inventory.filter(car=>car.car_make=== 'BMW' || car.car_make=== 'Audi');
    return BMWAndAudiCar;

}

module.exports =filterBMWAndAudiCars;