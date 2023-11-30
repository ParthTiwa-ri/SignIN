"use strict";

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const errorText = document.querySelector(".error-text");
const success = document.querySelector(".success");
const textBox = document.querySelector(".myInput");

const email = "vartu@gmail.com";

btn.addEventListener("click", function () {
  if (textBox.value === email) {
    success.classList.remove("hidden");
    container.classList.add("hidden");
  } else {
    textBox.classList.add("error-input");
    errorText.classList.remove("hidden");
  }
});
