// tile size in px:
tileSize = 64;
// width/height of map in tiles:
numTiles = 9;
// space for game ui:
uiWidth = 4;

// init xy coords
x = y = 0;

// load spritesheet
spritesheet = new Image();
spritesheet.src = "./imgs/spritesheet.png";

// wasd instructions for movement
document.querySelector("html").addEventListener("keypress", (e) => {
  e = e || window.event;
  if (e.key === "w") y--;
  if (e.key === "a") x--;
  if (e.key === "s") y++;
  if (e.key === "d") x++;
});
// for using arrows:
document.querySelector("html").addEventListener("keydown", (e) => {
  e = e || window.event;
  if (e.key === "ArrowUp") y--;
  if (e.key === "ArrowDown") y++;
  if (e.key === "ArrowLeft") x--;
  if (e.key === "ArrowRight") x++;
});

// draw the screen every 15ms(60+fps)
setInterval(game.draw, 15);

game.setupCanvas();
