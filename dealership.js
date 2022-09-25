

const Dealership = function(name, carCapacity, carsInStock) {
    let _name = name;
    let _carCapacity = carCapacity;
    let _carsInStock = [];

    // this.getName = () => _name;
    // this.setName = (name) => _name = name;
    // this.getCarCapacity = () => _carCapacity;
    // this.setCarCapacity = (carCapacity) => _carCapacity = carCapacity;
    // Car.prototype.getcarsInStock = () => _carsInStock;
    // Car.prototype.addCar = (car)=> _cars.push(car);
    // Car.prototype.removeCar = (car)=> _cars.splice(_cars.indexOf(car), 1);

    Dealership.prototype.count = function () {
        return this._carsInStock.length; // Shows how many cars in stock at dealership
    }
}

module.exports = {Dealership};