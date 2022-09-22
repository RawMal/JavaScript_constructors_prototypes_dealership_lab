const { Car} = require("./car");

describe('Car', () => {

    aventador = new Car('Lamborghini', '270000','6.5l V12');

    test('can access manufacturer properties', () => {    
    //actual = car1.getManufacturer();
        expect(aventador.getManufacturer()).toBe('Lamborghini');
    });

    test('can access price properties', () => {
        expect(aventador.getPrice()).toBe('270000');
    });

    test('can access engine properties', () => {
        expect(aventador.getEngine()).toBe('6.5l V12');
    });
})