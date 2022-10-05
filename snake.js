const DIRECTIONS = {
  RIGHT: "RIGHT",
  LEFT: "LEFT",
  UP: "UP",
  DOWN: "DOWN",
};

class SnakePiece {
  constructor(coords) {
    this.coords = coords;
    this.next = null;
    this.last = null;
  }
}

class Snake {
  constructor() {
    this.head = null;
    this.tail = null;
    this.direction = DIRECTIONS.RIGHT;
    this.length = 0;
  }

  init() {
    this.head = new SnakePiece([5, 5]);
    this.tail = this.head;
  }

  grow() {
    const newTail = new SnakePiece(this.tail.last.coords);
    this.tail.next = newTail;
    this.tail = newTail;
  }

  move() {}
}
