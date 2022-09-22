"url strict";

const nums = document.querySelectorAll(".nums");
const signs = document.querySelectorAll(".signs");
const result = document.querySelector(".result");
const equalsto = document.querySelector("#equals");
const delKey = document.querySelector("#delete");
const reset = document.querySelector("#reset");
const dot = document.querySelector("#dot");
const minus = document.querySelector("#minus");

let inputValues = [];

nums.forEach((nums) =>
  nums.addEventListener("click", function () {
    if (Number(result.innerHTML == "0")) {
      result.innerHTML = Number(nums.value);
      inputValues = [];
    } else {
      result.innerHTML += nums.value;
    }
    inputValues.push(nums.value);
  })
);

signs.forEach((signs) =>
  signs.addEventListener("click", function () {
    if (result.innerHTML === "") {
      return;
    } else if (result.innerHTML.at(-1) == "+") {
      return;
    } else if (result.innerHTML.at(-1) == "-") {
      return;
    } else if (result.innerHTML.at(-1) == "*") {
      return;
    } else if (result.innerHTML.at(-1) == "/") {
      return;
    } else if (result.innerHTML.at(-1) == ".") {
      return;
    }
    result.innerHTML += signs.value;
    inputValues.push(signs.value);
  })
);

// dot.addEventListener("click", function () {
//   if (result.innerHTML.includes(".") || result.innerHTML === "") {
//     return;
//   } else {
//     result.innerHTML += dot.value;
//   }

//   inputValues.push(dot.value);
// });

equalsto.addEventListener("click", function () {
  result.innerHTML = eval(result.innerHTML);
  inputValues.push(eval(result.innerHTML));
  console.log(formresult);
});

delKey.addEventListener("click", function () {
  inputValues = inputValues.slice(0, inputValues.length - 1);
  result.innerHTML = inputValues.join("");
});

reset.addEventListener("click", function () {
  result.innerHTML = "";
  inputValues = [];
  console.log(inputValues);
});

//////THEME TOGGLER
const body = document.querySelector("body");
const indicator = document.querySelector(".indicator");
const toTheme1 = document.querySelector("#toTheme1");
const toTheme2 = document.querySelector("#toTheme2");
const toTheme3 = document.querySelector("#toTheme3");

toTheme1.addEventListener("click", function () {
  body.className = "";
  indicator.style.left = "0px";
});

toTheme2.addEventListener("click", function () {
  body.className = "theme2";
  indicator.style.left = "20px";
});

toTheme3.addEventListener("click", function () {
  body.className = "theme3";
  indicator.style.left = "40px";
});
