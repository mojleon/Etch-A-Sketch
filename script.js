function construct(size) {
  let body = document.getElementsByTagName("body");

  let grid = document.createElement("section");
  grid.setAttribute("id", "grid");
  grid.style.cssText = "display: flex;";
  body[0].appendChild(grid);

  for (let r = 0; r <= size; r++) {
    let section = document.createElement("section");
    grid.appendChild(section);

    for (let c = 0; c <= size; c++) {
      let div = document.createElement("div");
      div.setAttribute("id", `${r}_${c}`);
      section.appendChild(div);
    }
  }

  drawingEventListeners();
}

function drawingEventListeners() {
  manipulateCanvas("draw");
}

function draw() {
  if (window.event.buttons == 1) this.style.backgroundColor = "#00ff00";
}

function reset() {
  manipulateCanvas("reset");
  let iGridSize = window.prompt("How large should the grid new be?");

  if (isNaN(iGridSize)) return;
  console.log(iGridSize);
  if (iGridSize <= 100 && iGridSize != null) constructNewGrid(iGridSize);
}

function constructNewGrid(size) {
  manipulateCanvas("remove");
  construct(size);
}

function manipulateCanvas(action) {
  let divDrawingBoard = document.getElementsByTagName("div");

  if (action == "reset")
    [...divDrawingBoard].forEach((div) => {
      div.style.backgroundColor = "red";
    });
  if (action == "draw")
    [...divDrawingBoard].forEach((div) => {
      div.addEventListener("mouseover", draw);
    });

  if (action == "remove")
    [...divDrawingBoard].forEach((div) => {
      div.remove();
    });
}

construct(40);
