const {Circle} = require('./shapes')

describe('Circle', () => {
    test('Circle rendered correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx='150' cy='100' r='80' fill='${color}'/>`);
    });
});
