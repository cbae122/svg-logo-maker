const {Circle, Square} = require('./shapes')

describe('Circle', () => {
    test('Circle rendered correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='${color}'/>`);
    });
});

describe('Square', () => {
    test('Square rendered correctly', () => {
        const shape = new Square();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x='90' y='40' width='120' height='120' fill='${color}'/>`);
    });
});