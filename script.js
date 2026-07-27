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

    li.addEventListener("click", () => {

        const nuevaTarea = prompt(
            "Editar tarea:",
            li.textContent
        );

        if(
            nuevaTarea !== null &&
            nuevaTarea.trim() !== ""
        ){
            li.textContent = nuevaTarea;
        }

    });

    taskList.appendChild(li);

    taskInput.value = "";
});