const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./shapes');
const {SVG} = require('./svg');

class CLI {
    constructor () {

    }
    run() {
        return inquirer
        .prompt([
            {
                type: "input",
                name: "text",
                message: "Enter text for your logo. (Must not be more than 3 characters)"
            },
            {
                type: "input",
                name: "textColor",
                message: "Enter a color for your text"
            },    
            {
                type: "input",
                name: "shapeColor",
                message: "Enter a color for your shape"
            },
            {
                type: "list",
                name: "shapeType",
                message: "Select a shape for your logo",
                choices: ['Circle', 'Square', 'Triangle']
            },
        ])
        .then (({text, textColor, shapeColor, shapeType }) => {
            let shape; 
            switch (shapeType) {
                case 'circle':
                    shape = new Circle();
                    break;

                case 'square':
                    shape = new Square();
                    break;

                default:
                    shape = new Triangle();
                    break;
            }

            shape.setColor(shapeColor);

            const svg = new SVG ();
            svg.setText (text, textColor);
            svg.setShape(shape);
            fs.writeFile('logo.svg', SVG, err => {
                if (err) return console.error(err);

                console.log('New logo generated successfully...');
                });
        })
    }
}

module.exports = CLI;