const tasks = [
    { id: 1, description: "Ir al gimnasio", completed: false },
    { id: 2, description: "Repasar materia", completed: false },
    { id: 3, description: "Revisar calendario", completed: false }
    ];

    const taskList = document.querySelector('#task-list');
    const newTaskInput = document.querySelector('#new-task');
    const addTaskBtn = document.querySelector('#add-task-btn');
    const totalTasksSpan = document.querySelector('#total-tasks');
    const completedTasksSpan = document.querySelector('#completed-tasks');

    function renderTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
            <td>${task.id}</td>
            <td class="${task.completed ? 'completed' : ''}">${task.description}</td>
            <td>
                <input type="checkbox" ${task.completed ? 'checked' : ''} onclick="toggleTask(${task.id})">
                <button class="delete-btn" onclick="deleteTask(${task.id})">❌</button>
            </td>
                `;
                taskList.appendChild(tr);
            });
            updateTaskCount();
        }

        function updateTaskCount() {
            totalTasksSpan.textContent = tasks.length;
            completedTasksSpan.textContent = tasks.filter(task => task.completed).length;
        }

        function addTask() {
            const description = newTaskInput.value.trim();
            if (description) {
                const newTask = { id: Date.now(), description, completed: false };
                tasks.push(newTask);
                newTaskInput.value = '';
                renderTasks();
            }
        }

        function deleteTask(id) {
            const index = tasks.findIndex(task => task.id === id);
            tasks.splice(index, 1);
            renderTasks();
        }

        function toggleTask(id) {
            const task = tasks.find(task => task.id === id);
            task.completed = !task.completed;
            renderTasks();
        }

        addTaskBtn.addEventListener('click', addTask);
        renderTasks();


