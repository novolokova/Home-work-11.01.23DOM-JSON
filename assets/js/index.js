"use strict";

// За допомогою дата-атрибутів реалізувати інтерактивну шпаргалку для візуалізації якості flex-direction.
// Приклад на малюнку.

const [wrap] = document.getElementsByClassName("wrap-div");
const btns = document.querySelectorAll(".btn button");
for (const btn of btns) {
  btn.addEventListener("click", ({ target: { dataset } }) => {
    btns.forEach((element) => {
      element.style.backgroundColor = "transparent";
      element.style.color = "black";
    });
    btn.style.backgroundColor = "#4fc2f8";
    btn.style.color = "white";
    wrap.style.flexDirection = dataset.flex;
  });
}
