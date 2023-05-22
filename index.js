const inquirer = require("inquirer"); 
const fs = require("fs"); 
const {Triangle, Circle, Square} = require("./lib/shapes");

function createSvgFile(answer){
    let mySvg = "<svg version = '1.1' width = '300' height = '200' xmlns = 'http://www.w3.org/2000/svg'>"
    let shapeChoice = new (eval(answer.shape))()
    shapeChoice.setColor(answer.shapeColor)
    mySvg += shapeChoice.render()
    mySvg += `<text x= "150" y = "130" text-anchor = "middle" font-size: "40" fill = "${answer.textColor}"> ${answer.text} </text>`
    mySvg += "</svg>"
    fs.writeFile("logo.svg", mySvg, err=>{
        err?console.log(err): console.log("Generated logo.svg")
    })
}

function promptUser(){
    inquirer
        .prompt([
            {
                type: "input",
                message: "Which 1-3 characters would you like include in the logo?",
                name: "text",
            },
            {
                type: "input",
                message: "What color would you like the text to be?",
                name: "textColor", 
            },
            {
                type: "list",
                message: "Which shape would you like?",
                name: "shape",
                choices: ["Triangle", "Circle", "Square"]
            },
            {
                type: "input",
                message: "What color would you like the shape to be?",
                name: "shapeColor",
            }

        ])
        .then(answer =>{
            createSvgFile(answer)
        }) 
}