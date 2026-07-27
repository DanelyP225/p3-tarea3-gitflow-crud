const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const taskCounter = document.getElementById("taskCounter");
const clearBtn = document.getElementById("clearBtn");

function actualizarContador() {
    taskCounter.textContent =
        "Total de tareas: " + taskList.children.length;
}

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
        actualizarContador();
    });

    li.appendChild(taskText);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);

    actualizarContador();

    taskInput.value = "";
});

actualizarContador();

clearBtn.addEventListener("click", () => {

    taskList.innerHTML = "";

    actualizarContador();

});