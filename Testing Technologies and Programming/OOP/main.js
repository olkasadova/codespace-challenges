class Shape{
    constructor() {}
    area() {
        console.log("Area method implemented...");
    }
}

class Square extends Shape{
    //constructor
    constructor(side) {
        super ();
        this.side = side;
    }
    //override method area from superclass
    area (side) {
        return this.side ** 2;
    }
}

class Circle extends Shape{
    //constructor
    constructor(side) {
        super ();
        this.radius = radius;
    }
    //override method area from superclass
    area (radius) {
        return Math.PI * this.radius ** 2;
    }
}