console.clear();
let c = [74, 75, 24, 25, 26, 27, 82, 32, 22, 23, 72, 73, 77, 76, 94, 95, 93, 43, 44, 45, 46, 36, 96];
let k = document.querySelector("span");
let r = 0;
let boxes = document.querySelectorAll(".box");

boxes.forEach((item, index) => {
  item.style.transition = "background 0.5s";
  item.addEventListener("click", () => {
    console.log("КОЧ", index);
    if (c.includes(index)) {
      item.style.background = "rgb(0 255 0 / 50%)";
      item.style.border = "1px dashed green";
      item.style.pointerEvents = "none";
      r++;
    } else {
      item.style.background = "rgb(255 0 0 / 50%)";
      r--;
    }
    k.textContent = r;

    if (c.every(i => boxes[i].style.pointerEvents === "none")) {
      document.body.innerHTML = `<h1 style="font-size: 100px; text-align: center;">Перемога!</h1>`;
    }
  });
});
