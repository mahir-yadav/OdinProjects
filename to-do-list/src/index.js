import './style.css'
import { renderSidebar, renderProject, saveToLocalStorage, loadFromLocalStorage } from './modules/dom.js';
import Project from './modules/project.js';



let projects = loadFromLocalStorage();
if (projects.length === 0) {
    const inbox = new Project('Default');
    inbox.addTodo('Do homework', '2025-06-03', 'medium');
    projects = [inbox];
    saveToLocalStorage(projects);
}


renderSidebar(projects, (selectedProject) => {
    renderProject(projects, selectedProject, document.querySelector('.todo-main'));
});

renderProject(projects, projects[0], document.querySelector('.todo-main'));
