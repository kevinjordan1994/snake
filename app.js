const gridContainer = document.querySelector(".grid__container");
const gridUnit = `<div class="grid__unit"></div>`;
const playerElement = `<div class="player"></div>`;

const playerState = {
  direction: "left",
  size: 1,
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
    }
  }
}

function movePlayer(grid, player) {
  for (let row = 0; row < grid.length; row++) {
    for (let collumn = 0; collumn < grid[row].length; collumn++) {
      if (grid[row][collumn] === 1) {
        if (player.direction === "left" && collumn > 0) {
          grid[row][collumn - 1] = 1;
          grid[row][collumn] = 0;
          renderGrid(grid);
          return;
        } else if (player.direction === "right" && collumn < 9) {
          grid[row][collumn + 1] = 1;
          grid[row][collumn] = 0;
          renderGrid(grid);
          return;
        } else if (player.direction === "up" && row > 0) {
          grid[row - 1][collumn] = 1;
          grid[row][collumn] = 0;
          renderGrid(grid);
          return;
        } else if (player.direction === "down" && row < 9) {
          grid[row + 1][collumn] = 1;
          grid[row][collumn] = 0;
          renderGrid(grid);
          return;
        }
      }
    }
  }
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
  movePlayer(grid, playerState);
  setTimeout(() => {
    step();
  }, gameSpeed);
}

step();
