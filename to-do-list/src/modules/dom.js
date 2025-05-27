function renderProject(project, container) {
    container.innerHTML = '';

    project.getTodos().forEach((todo) => {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo-item');

        todoDiv.classList.add(`${todo.priority}-priority`);

        const title = document.createElement('h3');
        title.textContent = todo.title;
        todoDiv.appendChild(title);

        const dueDate = document.createElement('p');
        dueDate.textContent = `Due: ${todo.dueDate}`;
        todoDiv.appendChild(dueDate);

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            todo.toggle();
            todoDiv.classList.toggle('completed', todo.completed);
        });
        todoDiv.appendChild(checkbox);
        const delete_btn = document.createElement('button');
        delete_btn.textContent = 'Delete';
        delete_btn.classList.add('delete-btn');
        todoDiv.appendChild(delete_btn);
        delete_btn.addEventListener('click', () => {
            const index = project.getTodos().indexOf(todo);
            project.deleteToDo(index);
            renderProject(project, document.querySelector('.todo-main'));

        });
        container.appendChild(todoDiv);
    });
}

function renderSidebar(projects, onSelectProject) {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    projects.forEach(project => {
        const projectBtn = document.createElement('button');
        projectBtn.textContent = project.name;
        projectBtn.classList.add('project-btn');

        projectBtn.addEventListener('click', () => {
            onSelectProject(project);
        });

        sidebar.appendChild(projectBtn);
    });
}
export { renderProject, renderSidebar };