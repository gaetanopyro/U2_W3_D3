const form = document.querySelector("form");

form.onsubmit = function (e) {
  e.preventDefault();

  console.log("SUBMIT");

  const taskInput = document.getElementById("taskItem");

  const ul = document.getElementById("list");
  const li = document.createElement("li");

  li.innerText = taskInput.value;
  console.dir(taskInput);
  li.onclick = function () {
    li.classList.toggle("line");
  };

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "ELIMINA";
  li.appendChild(deleteButton);
  deleteButton.onclick = function () {
    li.remove();
  };

  ul.appendChild(li);

  taskInput.value = "";
};
