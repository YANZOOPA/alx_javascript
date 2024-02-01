#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w > 0 && Number.isInteger(w)) {
        this.width = w;
      } else {
        this.width = 0;
      }
      if (h > 0 && Number.isInteger(h)) {
        this.height = h;
      } else {
        this.height = 0;
      }
    }
  }
  
  const r1 = new Rectangle(3, 3);
  console.log(r1); // Output: Rectangle { width: 3, height: 3 }
  console.log(r1.width, r1.height); // Output: 3 3  