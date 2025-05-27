import Todo from './todo.js';
class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }
    addTodo(title, dueDate, priority) {
        const newTodo = new Todo(title, dueDate, priority);
        this.todos.push(newTodo);
    }
    deleteToDo(index) {
        this.todos.splice(index, 1);
    }
    getTodos() {
        return this.todos;
    }
}
export default Project;