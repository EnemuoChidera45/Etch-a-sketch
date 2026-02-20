const container = document.querySelector("#container");
const resetBtn = document.querySelector("#reset-btn");

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 960 / size;
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("square");

    div.style.width = `${squareSize}px`;
    div.style.height = `${squareSize}px`;

    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });

    container.appendChild(div);
  }
}

resetBtn.addEventListener("click", () => {
  let userSize = prompt("Enter squares(Max 100):");

  userSize = parseInt(userSize);

  if (isNaN(userSize) || userSize < 1 || userSize > 100) {
    alert("Please enter a valid number between 1 and 100.");
  } else {
    createGrid(userSize);
  }
});

const clearBtn = document.querySelector("#clear-btn");

clearBtn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");

  squares.forEach((square) => {
    square.style.backgroundColor = "white";

    square.dataset.brightness = "100";
    square.style.filter = "brightness(100%)";
  });
});

createGrid(16);
