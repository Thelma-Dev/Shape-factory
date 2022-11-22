'use strict';

// Utility functions
function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

function getElement(selector, parent = document) {
    return parent.getElementById(selector);
}


function select(selector, parent = document) {
    return parent.querySelector(selector);
}


import Shape from './Shape.js';


const factory = select(".factory");
const create = select('.create');
const output = select('.output p');
const array = []


function createShape(name, color) {
    const shape = new Shape(name, color);
    let shapeOption = getElement("shape");
    let shapeValue = shapeOption.options[shapeOption.selectedIndex].value;
    let shapes = document.createElement('div');

    shapes.setAttribute('onclick', 'printInfo(this)');
    array.push(shapes);


   if(shapeValue === 'circle') {
    shapes.classList.add("circle"); 
   } else {
    shapes.classList.add("square"); 
   }


    let colorOption = getElement("color");
    let colorValue = colorOption.options[colorOption.selectedIndex].value;

    switch (colorValue) {
        case "blue":
            shapes.style.backgroundColor = '#09f';
            break; 
        case "green":
            shapes.style.backgroundColor = '#9f0';
            break;
        case "orange":
            shapes.style.backgroundColor = '#f90';
            break;
        case "purple":
            shapes.style.backgroundColor = '#90f';
            break;
        case "pink":
            shapes.style.backgroundColor = '#f09';
    } 

    return shapes;
}


function shapeAppend() {
    factory.append(createShape());
}

onEvent('click', create, function() {
    console.log(createShape());
    shapeAppend();
    validateLimit();
})

function validateLimit() {

    let numberOfShapes = factory.children.length
    if(numberOfShapes === 21) {
        create.disabled = true;
        output.innerText = 'Storage is full!';
    }
}





    

    