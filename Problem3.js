function sortCarModelsAlphabetically(inventory) {
    const carModels = inventory.map(car => car.car_model);
    return carModels.sort();
}

module.exports = sortCarModelsAlphabetically;
