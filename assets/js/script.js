let container = document.querySelector(".container");
let turn = true;
let playclick = ["", "", "", "", "", "", "", "", ""];

const getclick = ({ target }) => {
  if (turn) {
    target.firstChild.classList = "show";
    playclick[target.id] = turn ? "X" : "O";
    turn = !turn;
  } else {
    target.lastChild.classList = "show";
    playclick[target.id] = !turn ? "O" : "X";
    turn = true;
  }

  let amostra = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  let moves =
    (playclick[0] === "X" && playclick[1] === "X" && playclick[2] === "X") ||
    (playclick[0] === "O" && playclick[1] === "O" && playclick[2] === "O") ||
    (playclick[3] === "X" && playclick[4] === "X" && playclick[5] === "X") ||
    (playclick[3] === "O" && playclick[4] === "O" && playclick[5] === "O") ||
    (playclick[6] === "X" && playclick[7] === "X" && playclick[8] === "X") ||
    (playclick[6] === "O" && playclick[7] === "O" && playclick[8] === "O") ||
    (playclick[0] === "X" && playclick[3] === "X" && playclick[6] === "X") ||
    (playclick[0] === "O" && playclick[3] === "O" && playclick[6] === "O") ||
    (playclick[1] === "X" && playclick[4] === "X" && playclick[7] === "X") ||
    (playclick[1] === "O" && playclick[4] === "O" && playclick[7] === "O") ||
    (playclick[2] === "X" && playclick[5] === "X" && playclick[8] === "X") ||
    (playclick[2] === "O" && playclick[5] === "O" && playclick[8] === "O") ||
    (playclick[0] === "X" && playclick[4] === "X" && playclick[8] === "X") ||
    (playclick[0] === "O" && playclick[4] === "O" && playclick[8] === "O") ||
    (playclick[2] === "X" && playclick[4] === "X" && playclick[6] === "X") ||
    (playclick[2] === "O" && playclick[4] === "O" && playclick[6] === "O")
      ? true
      : false;

  if (moves) {
    if (!turn) {
      setTimeout(function () {
        alert("x venceu");
      }, 10);
    } else {
      setTimeout(function () {
        alert("0 venceu");
      }, 10);
    }
  }
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
  for (let i = 0; i <= 8; i++) {
    let box = createstagegame();
    box.id = i;
    container.appendChild(box);
  }
};
setgame();
