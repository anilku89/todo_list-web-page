const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add");
const taskList = document.getElementById("taskList");

// Add task
addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    const category = document.getElementById("category").value;
    if (taskText !== "") {
        createTask(taskText, dueDate, priority, category);
        taskInput.value = "";
    }
});

// Create a new task
function createTask(text, dueDate, priority, category) {
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <div>
            <span>${text}</span>
            <span class="creation-date">Created on: ${new Date().toLocaleDateString()}</span>
        </div>
        <div>
            <span>Due Date: ${dueDate}</span>
            <span>Priority: ${priority}</span>
            <span>Category: ${category}</span>
            <button class="delete">Delete</button>
        </div>
    `;
    taskList.appendChild(taskItem);

    // Delete task
    const deleteBtn = taskItem.querySelector(".delete");
    deleteBtn.addEventListener("click", () => {
        deleteTask(taskItem);
    });

    // Mark as completed
    taskItem.addEventListener("click", () => {
        taskItem.classList.toggle("completed");
    });
}

// Delete task and display creation date
function deleteTask(taskItem) {
    const creationDate = taskItem.querySelector(".creation-date").textContent;
    alert("Task created on: " + creationDate);
    taskItem.remove();
}

