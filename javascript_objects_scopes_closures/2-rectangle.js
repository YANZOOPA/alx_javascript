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
  