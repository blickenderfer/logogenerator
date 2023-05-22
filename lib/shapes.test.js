const {Triangle, Circle, Square} = require("./shapes.js"); 

describe("Triangle Test", () => {
    it("should generate a blue Triangle.", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    })
});

describe("Circle Test", () => {
    it("should generate a blue Circle.", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx = "150" cy = "115" r = "80" fill="blue"/>');
    })
});

describe("Square Test", () => {
    it("should generate a blue Square.", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x = "73" y = "40" height = "160" height = "160" fill="blue"/>');
    })
});