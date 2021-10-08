"use strict";

let parent = document.querySelector(".container");

document.querySelector(".go").addEventListener("click", function () {
  let value = document.getElementById("in").value;
  let parent = document.querySelector(".container");

  if (value) {
    document.querySelector("h3").textContent = `${value} X ${value}`;

    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }

    for (var i = 0; i < value * value; i++) {
      var element = document.createElement("div");
      element.style.width = `${500 / value}px`;
      element.style.height = `${500 / value}px`;
      document.querySelector(".container").appendChild(element);

      element.addEventListener("mouseover", function (event) {
        event.target.style.background = "orange";
      });
    }
    document.getElementById("in").value = "";
  }
});

document.querySelector(".clear").addEventListener("click", function () {
  for (var i = 0; i < parent.children.length; i++) {
    parent.children[i].style.background = "white";
  }
});
