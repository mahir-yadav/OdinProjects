class Todo {
    constructor(title, dueDate, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
    }
    toggle() {
        this.completed = !this.completed;
    }
}

export default Todo;


