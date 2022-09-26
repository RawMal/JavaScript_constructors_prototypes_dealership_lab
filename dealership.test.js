const { name } = require("ci-info");
const { Car } = require("./car");
const { Dealership} = require("./dealership");

test("Dealership - count()", () => {
    let _name = "Test";
    let _carCapacity = 12;
    let _carsInStock = [new Car('Ferrari', 250000, '5l V12'), new Car('Maserati', 100000, '5l V8')];


    let dealership = new Dealership(_name, _carCapacity, _carsInStock);
    dealership._carsInStock = _carsInStock; //tests cars in stock function
    // expect(dealership.count()).toBe(2);

    dealership.add(new Car('Lamborghini', 300000, '6l V12'));
    expect(dealership.count()).toBe(3); //tests if cars can be added
    
    // expect(dealership.manufacturers()).toBe(["Ferrari", "Maserati", "Lamborghini"]);

    expect(dealership.total()).toBe(650000);
    
}



)