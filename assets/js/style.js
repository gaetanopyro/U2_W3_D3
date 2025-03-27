const form = document.querySelector("form");

form.onsumbit = function (e) {
  e.preventDefault();

  console - log("SUBMIT");
};

const taskInput = document.querySelector("taskItem");
const ul = document.getElementById("list");

const inputN = document.getElementById("taskItem");

const li = document.createElement("li");
li.innerText = inputN.value;
