"use strict";
import Figure from './Figure.js';
export class Rectangle extends Figure {
constructor(name, width,height){
    super(name);
    this.width = width;
    this.height = height;
}
}