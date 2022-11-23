'use strict';

class Shape {

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    getName() {
        return this._name;
    }

    getColor() {
        return this._color;
    }

    getInfo() {
        return `${this._color} ${this._name}`;
    }
}


export default Shape;
