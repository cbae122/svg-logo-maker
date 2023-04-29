class Shape {
    constructor () {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render () {
        return `<circle cx='150' cy='100' r='80' height='100%' width='100%' fill='${this.color}'/>`;
    }
}

class Square extends Shape {
    render () {
        return `<rect x='90' y='40' width='120' height='120' fill='${this.color}'/>`;
    }
}

class Triangle extends Shape {
    render () {
        return `<polygon height='100%' width='100%' points='0, 200 300, 200 150, 0' fill='${this.color}'/>`;
    }
}
module.exports = {Circle, Square, Triangle}
