const getPercents = require('./getPercents');

describe('getPercents', () => {
    test('30% от 200 = 60', () => {
        expect(getPercents(30, 200)).toBe(60);
    });

    test('0% от числа всегда 0', () => {
        expect(getPercents(0, 500)).toBe(0);
    });

    test('работает с дробными значениями', () => {
        expect(getPercents(12.5, 80)).toBe(10);
    });
});