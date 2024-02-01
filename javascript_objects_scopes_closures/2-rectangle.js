#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      // Convert negative values to positive
      const positiveW = Math.abs(w);
      const positiveH = Math.abs(h);
  
      // Initialize the instance attributes width and height
      if (positiveW > 0 && Number.isInteger(positiveW) && positiveH > 0 && Number.isInteger(positiveH)) {
        this.width = positiveW;
        this.height = positiveH;
      } else {
        // If positiveW or positiveH is not a positive integer, create an empty object
        this.width = 0;
        this.height = 0;
      }
    }
  }
  