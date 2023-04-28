class Svg {
    constructor () {
        this.textElement = ''
        this.shapeElement = ''
    }
    render () {
        return `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'>${this.textElement}${this.shapeElement}</svg>`
    }
    setTextElement(text, color) {
        this.textElement = `<text x='150' y='150' font-size='60' text-anchor='middle' fill='${color}'>${text}</text>`
    }
    setShapeElement(shape) {
        this.shapeElement = shape.render()
    }
}

module.exports = {Svg}