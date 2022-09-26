

const Dealership = function(name, carCapacity, carsInStock) {
    this._name = name;
    this._carCapacity = carCapacity;
    this. _carsInStock = [];

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

    Dealership.prototype.add = function (car) {
        if (this.count() < this._carCapacity) { // caps car count
            this._carsInStock.push(car) //adds car to dealership stock list
    }

    Dealership.prototype.manufacturers = function () {
        return this._carsInStock.map( (car) => car.manufacturer) //returns an array of each cars manufacturer
        // let result = []
        // this._carsInStock.forEach(car => {
        //     result.push(car.manufacturer)
        // })
        // return result;
    }

    Dealership.prototype.carsWithManufacturer = function (manufacturer) {
        return this._carsInStock.filter( car => car.manufacturer == manufacturer)
    }

    Dealership.prototype.total = function () {
        return this._carsInStock.reduce((total, car) => total += car.price, 0)
    }

    



}
}

module.exports = {Dealership};