class Todo {
    constructor(title, dueDate, priority, completed = false) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
    toggle() {
        this.completed = !this.completed;
    }
    update(title, dueDate, priority, completed) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = completed;
    }
}

export default Todo;


