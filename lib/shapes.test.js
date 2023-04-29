const {Circle, Square, Triangle} = require('./shapes')

describe('Circle', () => {
    test('Circle rendered correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' height='100%' width='100%' fill='${color}'/>`);
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

describe('Triangle', () => {
    test('Triangle rendered correctly', () => {
        const shape = new Triangle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon height='100%' width='100%' points='0, 200 300, 200 150, 0' fill='${color}'/>`);
    });
});