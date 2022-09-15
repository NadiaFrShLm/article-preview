"use strict";

const mediaArrow = document.querySelector(".social-media");
const mediaBox = document.querySelector(".media-box");

mediaArrow.addEventListener("click", function () {
  mediaBox.classList.toggle("hidden");
  mediaBox.classList.toggle("up");
});
