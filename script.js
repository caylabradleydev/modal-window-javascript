"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnHideModal = document.querySelector(".hide-modal");
const btnShowModal = document.querySelectorAll(".show-modal");

//Hide Modal
function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

//Open Modal
function showModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener("click", showModal);
}

//Modal Buttons
overlay.addEventListener("click", hideModal);
btnHideModal.addEventListener("click", hideModal);

//Hide Modal w/ Escape Key
document.addEventListener("keydown", function (e) {
  if ((e.key === "Escape") & !modal.classList.contains("hidden")) {
    hideModal();
  }
});
