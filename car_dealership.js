const Car = function(model, manufacturer, engine) {
    let _model = model;
    let _manufacturer = manufacturer;
    let _engine = engine;

    this.getModel = () => _model;
    this.setModel = (model) => _model = model;
    this.getManufacturer = () => _manufacturer;
    this.setManufacturer = (manufacturer) => _manufacturer = manufacturer;
    this.getEngine = () => _engine;
    this.setEngine = (engine) => _engine = engine;

}