const { name } = require("ci-info");
const { Car } = require("./car");
const { Dealership} = require("./dealership");

test("Dealership - count()", () => {
    let _name = "Test";
    let _carCapacity = 12;
    let _carsInStock = [new Car('Ferrari', 250000, '5l V12'), new Car('Maserati', 100000, '5l V8')];


    let dealership = new Dealership(_name, _carCapacity);
    dealership._carsInStock = _carsInStock;
    

    expect(dealership.count()).toBe(2);
}



)