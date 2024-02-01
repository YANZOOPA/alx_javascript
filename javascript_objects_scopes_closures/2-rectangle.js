#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      // Initialize the instance attributes width and height
      if (w > 0 && Number.isInteger(w) && h > 0 && Number.isInteger(h)) {
        this.width = w;
        this.height = h;
      } else {
        // If w or h is equal to 0 or not a positive integer, create an empty object
        this.width = 0;
        this.height = 0;
      }
    }
  }
