import './style.css'
import { renderSidebar, renderProject } from './modules/dom.js';
import Project from './modules/project.js';
import Todo from './modules/todo.js';

const inbox = new Project('Inbox');
inbox.addTodo('Buy milk', '2025-06-01', 'high');
inbox.addTodo('Do homework', '2025-06-03', 'medium');




const work = new Project('Work');
work.addTodo('Finish report', '2025-06-02', 'high');

const projects = [inbox, work];

renderSidebar(projects, (selectedProject) => {
    renderProject(selectedProject, document.querySelector('.todo-main'));
});

renderProject(projects[0], document.querySelector('.todo-main'));

