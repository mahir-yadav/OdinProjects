import './style.css'
import { renderSidebar, renderProject } from './modules/dom.js';
import Project from './modules/project.js';
import Todo from './modules/todo.js';

const inbox = new Project('Default');
inbox.addTodo('Do homework', '2025-06-03', 'medium');



const projects = [inbox];

renderSidebar(projects, (selectedProject) => {
    renderProject(selectedProject, document.querySelector('.todo-main'));
});

renderProject(projects[0], document.querySelector('.todo-main'));

