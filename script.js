const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", () => {

    const task = taskInput.value;

    if (task === "") {
        alert("Debes escribir una tarea");
        return;
    }

    const li = document.createElement("li");

    const taskText = document.createElement("span");
    taskText.textContent = task;

    taskText.addEventListener("click", () => {

        const nuevaTarea = prompt(
            "Editar tarea:",
            taskText.textContent
        );

        if (
            nuevaTarea !== null &&
            nuevaTarea.trim() !== ""
        ) {
            taskText.textContent = nuevaTarea;
        }

    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    taskInput.value = "";
});