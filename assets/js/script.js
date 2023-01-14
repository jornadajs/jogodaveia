let container = document.querySelector(".container");
let gramma = document.querySelector(".box_gramma img");
let trophy = document.querySelector(".box_trophy");
let playermoves = ["", "", "", "", "", "", "", "", ""];
let risk = document.querySelector(".risk");
let turn = true;
let endgame = false;

let posibilities = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const drawinner = (c) => {
  let line = document.createElement("div");
  line.className = "line";
  switch (Number(c)) {
    case 0:
      line.style.transform = "translateY(-100px)";
      break;
    case 1:
      line.style.transform = "translateY(-15px)";
      break;
    case 2:
      line.style.transform = "translateY(60px)";
      break;
    case 3:
      line.style.transform = "rotate(90deg)";
      line.style.marginRight = "100px";
      break;
    case 4:
      line.style.transform = "rotate(90deg)";
      break;
    case 5:
      line.style.transform = "rotate(90deg)";
      line.style.marginLeft = "100px";
      break;
    case 6:
      line.style.transform = "rotate(57deg)";
      line.style.marginLeft = "15px";
      break;
    case 7:
      line.style.transform = "rotate(-57deg)";
      line.style.marginRight = "20px";
      break;
  }

  risk.appendChild(line);
};
const fendgame = (target) => {
  switch (target) {
    case "w":
      endgame = true;
      gramma.src = "/assets/images/grammasuperhappy.png";
      trophy.classList.add("show");
  }
};
const alertwinner = (target, c) => {
  setTimeout(function () {
    fendgame("w");
    drawinner(c);
    alert(target + " venceu");
  }, 10);
};
const checkwinner = (target) => {
  for (i in posibilities) {
    let moves =
      playermoves[posibilities[i][0]] == target &&
      playermoves[posibilities[i][1]] == target &&
      playermoves[posibilities[i][2]] == target
        ? alertwinner(target, i)
        : null;
  }
  setTimeout(function () {
    if (playermoves.indexOf("") === -1) {
      gramma.src = "/assets/images/grammangry.png";
      alert("deu velha!");
    }
  }, 10);
};

const getclick = ({ target }) => {
  if (!endgame) {
    if (turn) {
      if (!playermoves[target.id]) {
        target.firstChild.classList.add("show");
        playermoves[target.id] = turn ? "X" : "O";
        checkwinner(playermoves[target.id]);
        turn = !turn;
      }
    } else {
      if (!playermoves[target.id]) {
        target.lastChild.classList.add("show");
        playermoves[target.id] = !turn ? "O" : "X";
        checkwinner(playermoves[target.id]);
        turn = true;
      }
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
