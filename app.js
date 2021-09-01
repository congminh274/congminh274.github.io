const redEl = document.querySelector("#R");
const greenEl = document.querySelector("#G");
const blueEl = document.querySelector("#B");
const box = document.querySelector(".box");

const redEl2 = document.querySelector("#R2");
const greenEl2 = document.querySelector("#G2");
const blueEl2 = document.querySelector("#B2");
const box2 = document.querySelector(".box2");

const hisEl = document.getElementById("history-section");
const btn = document.querySelector(".save");
const mixBtn = document.querySelector(".mix");
const boxRes = document.querySelector(".box3")
let countBox = 0;

document.addEventListener("change", changeColor);
mixBtn.addEventListener("click", mixColor);
btn.addEventListener("click", saveColor);

function createBox(color) {
   const b = document.createElement("div");
   b.classList.add("boxNew");
   b.style.backgroundColor = color;
   return b;
}

function saveColor() {
   let r = redEl.value;
   let g = greenEl.value;
   let b = blueEl.value;

   let r2 = redEl2.value;
   let g2 = greenEl2.value;
   let b2 = blueEl2.value;

   let rT = 0.5*r + 0.5*r2;
   let gT = 0.5*g + 0.5*g2;
   let bT = 0.5*b + 0.5*b2;

   if (countBox == 10) {
      hisEl.innerHTML = "";
   }
   const newBox = createBox(`rgb(${rT}, ${gT}, ${bT})`)
   hisEl.appendChild(newBox);
   countBox ++;
}

function changeColor() {
   let r = redEl.value;
   let g = greenEl.value;
   let b = blueEl.value;
   box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

   let r2 = redEl2.value;
   let g2 = greenEl2.value;
   let b2 = blueEl2.value;
   box2.style.backgroundColor = `rgb(${r2}, ${g2}, ${b2})`;
}

function mixColor() {
   let r = redEl.value;
   let g = greenEl.value;
   let b = blueEl.value;

   let r2 = redEl2.value;
   let g2 = greenEl2.value;
   let b2 = blueEl2.value;

   let rT = 0.5*r + 0.5*r2;
   let gT = 0.5*g + 0.5*g2;
   let bT = 0.5*b + 0.5*b2;

   boxRes.style.backgroundColor = `rgb(${rT}, ${gT}, ${bT})`;
}