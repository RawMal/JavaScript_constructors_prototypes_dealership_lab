const {
    Car
} = require("./car_dealership");

describe('Car', () => {

    test('can access manufacturer properties'), () => {
        expected: 'Lamborghini'
        actual: const car1 = new Car('Aventador', 'Lamborghini','6.5');
        console.log(car1.getManufacturer);
        expect(actual).toBe(expected);
    };
}
)