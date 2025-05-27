import Project from "./project.js";

function renderProject(project, container) {
    container.innerHTML = '';
    const div_heading = document.createElement('div');
    div_heading.classList.add("div-heading");
    const heading = document.createElement('h1');
    heading.textContent = `${project.name}`;

    div_heading.appendChild(heading);
    const addTodoBtn = document.createElement('button');
    addTodoBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  `;
    addTodoBtn.classList.add('add-todo-btn');
    div_heading.appendChild(addTodoBtn);
    container.appendChild(div_heading);

    addTodoBtn.addEventListener('click', () => {
        const title = prompt('Enter title:');
        const dueDate = prompt('Enter due date (YYYY-MM-DD):');
        const priority = prompt('Enter priority (low/medium/high):');

        if (!title) return;

        project.addTodo(title, dueDate, priority);
        renderProject(project, document.querySelector('.todo-main'));
    });
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
        delete_btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
      `;
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
    const addProjectBtn = document.createElement('button');
    addProjectBtn.textContent = '+ Add Project';
    addProjectBtn.classList.add('add-project-btn');
    addProjectBtn.addEventListener('click', () => {
        const name = prompt('Enter project name');
        if (!name) return;
        const newProject = new Project(name);
        projects.push(newProject);
        renderSidebar(projects, onSelectProject);
    });
    sidebar.appendChild(addProjectBtn);
}
export { renderProject, renderSidebar };