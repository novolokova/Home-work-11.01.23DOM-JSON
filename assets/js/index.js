"use strict";

// За допомогою дата-атрибутів реалізувати інтерактивну шпаргалку для візуалізації якості flex-direction.
// Приклад на малюнку.

const btns = document.querySelectorAll(".btn button");
for (const btn of btns) {
  btn.addEventListener("click", ({target}) => {
    for (const element of btns) {
      element.style.backgroundColor = "transparent";
      element.style.color = "black";
    }
    btn.style.backgroundColor = "#4fc2f8";
    btn.style.color = "white";
    target.parentElement.nextElementSibling.style.display = 'flex';
    target.parentElement.nextElementSibling.style.flexDirection = target.dataset.flex;
  });
}