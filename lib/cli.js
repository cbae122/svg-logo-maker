const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require('./shapes');
const {Svg} = require('./svg');

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
                name: "text-color",
                message: "Enter a color for your text"
            },    
            {
                type: "input",
                name: "shape-color",
                message: "Enter a color for your shape"
            },
            {
                type: "list",
                name: "text",
                message: "Select a shape for your logo",
                choices: ['Circle', 'Square', 'Triangle']
            },
        ])
        
    }
}