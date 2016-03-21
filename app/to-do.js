var Task = (function () {
    function Task(description, priority) {
        this.description = description;
        this.priority = priority;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var tasks = [];
tasks.push(new Task("Do JS Homework", "High"));
tasks.push(new Task("Watch Daredevil", "low"));
tasks.push(new Task("Eat Sardines", "High"));
tasks[0].markDone();
console.log(tasks);
