const {Svg} = require('./svg')

describe('SVG', () => {
    test('SVG rendered correctly', () => {
        const shape = new Svg();
        expect(shape.render()).toEqual(`<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'></svg>`);
    });
});