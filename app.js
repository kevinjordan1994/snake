const gridContainer = document.querySelector(".grid__container");
const gridUnit = `<div class="grid__unit"></div>`;
const player = `<div class="player"></div>`;

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
        gridContainer.insertAdjacentHTML("beforeend", player);
      }
    }
  }
}

function movePlayer(grid, direction) {
  for (let row = 0; row < grid.length; row++) {
    for (let collumn = 0; collumn < grid[row].length; collumn++) {
      if (grid[row][collumn] === 1) {
        if (direction === "left" && collumn > 0) {
          grid[row][collumn] = 0;
          grid[row][collumn - 1] = 1;
        }
        if (direction === "right" && collumn < 9) {
          grid[row][collumn] = 0;
          grid[row][collumn + 1] = 1;
        }
        if (direction === "up" && row > 0) {
          grid[row][collumn] = 0;
          grid[row - 1][collumn] = 1;
        }
        if (direction === "down" && row < 9) {
          grid[row][collumn] = 0;
          grid[row + 1][collumn] = 1;
        }
        break;
      }
    }
  }
  renderGrid(grid);
}

renderGrid(grid);

document.addEventListener("keydown", (event) => {
  console.log(event.key);
  if (event.key === "ArrowLeft") movePlayer(grid, "left");
  if (event.key === "ArrowRight") movePlayer(grid, "right");
  if (event.key === "ArrowUp") movePlayer(grid, "up");
  if (event.key === "ArrowDown") movePlayer(grid, "down");
});
