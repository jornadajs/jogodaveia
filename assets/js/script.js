let container = document.querySelector(".container");

const getclick = ({ target }) => {
  console.log(target);
};

const createstagegame = () => {
  let square = document.createElement("div");
  let markX = document.createElement("div");
  let markO = document.createElement("div");

  markX.innerHTML = "X";
  markO.innerHTML = "O";

  square.className = "box";
  markX.className = "markX";
  markO.className = "markO";

  square.addEventListener("click", getclick);
  square.appendChild(markX);
  square.appendChild(markO);

  return square;
};
const setgame = () => {
  for (let i = 1; i <= 9; i++) {
    let box = createstagegame();
    box.id = i;
    container.appendChild(box);
  }
};
setgame();
