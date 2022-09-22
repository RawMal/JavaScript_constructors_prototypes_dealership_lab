const Car = function(manufacturer, price, engine) {
    
    let _manufacturer = manufacturer;
    let _price = price;
    let _engine = engine;

    this.getManufacturer = () => _manufacturer;
    this.setManufacturer = (manufacturer) => _manufacturer = manufacturer;
    this.getPrice = () => _price;
    this.setPrice = (price) => _price = price;
    this.getEngine = () => _engine;
    this.setEngine = (engine) => _engine = engine;

}

module.exports = {Car};


