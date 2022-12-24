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


onEvent('click', create, function() {

    let shapeOption = getElement("shape");
    let shapeValue = shapeOption.options[shapeOption.selectedIndex].value;
    let colorOption = getElement("color");
    let colorValue = colorOption.options[colorOption.selectedIndex].value;
    let htmlShape = document.createElement('div');
    let shape = new Shape(shapeValue, colorValue);

    // To validate limited number of shapes created after each push
    if(validateLimit()) {
        array.push(shape);
    }        


    // To create the shape based on selected option
   if(shapeValue === 'circle') {
    htmlShape.classList.add("circle"); 
   } else {
    htmlShape.classList.add("square"); 
   }

    switch (colorValue) {
        case "blue":
            htmlShape.style.backgroundColor = '#09f';
            break; 
        case "green":
            htmlShape.style.backgroundColor = '#9f0';
            break;
        case "orange":
            htmlShape.style.backgroundColor = '#f90';
            break;
        case "purple":
            htmlShape.style.backgroundColor = '#90f';
            break;
        case "pink":
            htmlShape.style.backgroundColor = '#f09';
    } 
    factory.append(htmlShape);     // Append the shape to the factory
    printInfo(htmlShape, shape);
    return shape;
});

function validateLimit() {

    let numberOfShapes = factory.childElementCount
    if(numberOfShapes === 14) {
        create.disabled = true;
        output.innerText = 'Storage is full!';
        return false;
    }

    return true;
}

function printInfo(htmlShape, obj) {
    
    // To display shape position and information when shape is clicked
    htmlShape.addEventListener('click', () => {
        output.innerText= `Unit ${array.indexOf(obj) + 1}: ${obj.getInfo()}`; 
    });
}





    

    