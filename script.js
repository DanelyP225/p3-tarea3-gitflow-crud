const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    const task = taskInput.value;

    if(task === ""){
        alert("Debes escribir una tarea");
        return;
    }

    const li = document.createElement("li");

    li.textContent = task;

    taskList.appendChild(li);

    taskInput.value = "";
});