const gridContainer = document.querySelector(".grid__container");
const gridUnit = `<div class="grid__unit"></div>`;
const playerElement = `<div class="player"></div>`;

const playerState = {
  direction: "left",
  snake: [1, 2],
};
const gameSpeed = 200;

let grid = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

function renderGrid(grid) {
  gridContainer.innerHTML = "";
  for (let row = 0; row < grid.length; row++) {
    for (let collumn = 0; collumn < grid[row].length; collumn++) {
      if (grid[row][collumn] === 0) {
        gridContainer.insertAdjacentHTML("beforeend", gridUnit);
      }
      if (grid[row][collumn] === 1) {
        gridContainer.insertAdjacentHTML("beforeend", playerElement);
      }
      if (grid[row][collumn] === 2) {
        gridContainer.insertAdjacentHTML("beforeend", playerElement);
      }
    }
  }
}

function move() {
  const moveSnakePieces = (row, collumn) => {
    //get the length of the snake
    for (
      let snakePieces = 0;
      snakePieces < playerState.snake.length;
      snakePieces++
    ) {}
    //set each snake piece to the coordinates of the previous snake piece
    //set the last space to 0
  };

  const movePlayer = (direction, row, collumn) => {
    if (direction === "left" && collumn > 0) {
      grid[row][collumn - 1] = 1;
      for (let i = 0; i < playerState.snake.length; i++) {
        moveSnakePiece([row, collumn]);
      }
      grid[row][collumn] = 0;
      return;
    }
    if (direction === "right" && collumn < 9) {
      grid[row][collumn + 1] = 1;
      for (let i = 0; i < playerState.snake.length; i++) {
        moveSnakePiece([row, collumn]);
      }
      grid[row][collumn] = 0;
      return;
    }
    if (direction === "up" && row > 0) {
      grid[row - 1][collumn] = 1;
      for (let i = 0; i < playerState.snake.length; i++) {
        moveSnakePiece([row, collumn]);
      }
      grid[row][collumn] = 0;
      return;
    }
    if (direction === "down" && row < 9) {
      grid[row + 1][collumn] = 1;
      for (let i = 0; i < playerState.snake.length; i++) {
        moveSnakePiece([row, collumn]);
      }
      grid[row][collumn] = 0;
      return;
    }
  };

  const findSnakePiece = (direction, coords) => {
    if (direction === "left") return [coords[0], coords[1] + 1];
    if (direction === "right") return [coords[0], coords[1] - 1];
    if (direction === "up") return [coords[0] + 1, coords[1]];
    if (direction === "down") return [coords[0] - 1, coords[1]];
  };

  const moveSnakePiece = (coords) => {
    grid[coords[0]][coords[1]] = 2;
  };

  for (let row = 0; row < grid.length; row++) {
    for (let collumn = 0; collumn < grid[row].length; collumn++) {
      if (grid[row][collumn] === 1) {
        movePlayer(playerState.direction, row, collumn);
        renderGrid(grid);
        return;
      }
    }
  }
  //move the player head based on direction
  //save it's coordinates
  //loop through snake array
  //set each unit to the previous unit coordinates
}

function changeDirection(direction) {
  playerState.direction = direction;
}

renderGrid(grid);

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "ArrowLeft") changeDirection("left");
  if (event.key === "ArrowRight") changeDirection("right");
  if (event.key === "ArrowUp") changeDirection("up");
  if (event.key === "ArrowDown") changeDirection("down");
});

function step() {
  move();
  setTimeout(() => {
    step();
  }, gameSpeed);
}

step();
