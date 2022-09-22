const { Car} = require("./car");

describe('Car', () => {

    test('can access manufacturer properties', () => {
        car1 = new Car('Aventador', 'Lamborghini','6.5');
        //actual = car1.getManufacturer();
        expect(car1.getManufacturer()).toBe('Lamborghini');
    });
})