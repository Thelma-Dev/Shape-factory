'use strict';

class Shape {

    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    getName() {
        return this._name;
    }

    getColor() {
        return this._color;
    }

    getInfo() {
        this.getName();
        this.getColor();
    }
}


export default Shape;
