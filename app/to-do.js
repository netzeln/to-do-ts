var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Task = (function () {
    function Task(description, priority, assignedTo) {
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
        this.done = false;
    }
    Task.prototype.markDone = function () {
        this.done = true;
    };
    return Task;
}());
var HomeTask = (function (_super) {
    __extends(HomeTask, _super);
    function HomeTask(description, priority, assignedTo) {
        _super.call(this, description, priority);
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return HomeTask;
}(Task));
var HobbyTask = (function (_super) {
    __extends(HobbyTask, _super);
    function HobbyTask(description) {
        _super.call(this, description, "low");
        this.description = description;
    }
    return HobbyTask;
}(Task));
var WorkTask = (function (_super) {
    __extends(WorkTask, _super);
    function WorkTask(dueDate, description, priority, assignedTo) {
        _super.call(this, description, priority, assignedTo);
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.assignedTo = assignedTo;
    }
    return WorkTask;
}(Task));
var nic = {
    name: "nic",
    email: "solidtimeofchange@yahoo.com"
};
var Tanklin = {
    name: "Tanklin Franklin",
    email: "imaginary@notreal.biz"
};
var Hamilton = {
    name: "alex",
    email: "CashMoney@1792treasury.gov"
};
var tasks = [];
tasks.push(new HomeTask("Do JS Homework", "High", nic));
tasks.push(new HomeTask("Scan Tax stuff", "High", Hamilton));
tasks.push(new HomeTask("Install Hose Holder", "low"));
tasks.push(new HobbyTask("Watch Daredevil"));
tasks.push(new HobbyTask("play on computer"));
var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);
tasks.push(new WorkTask(today, "Finish this lesson", "high", Tanklin));
tasks.push(new WorkTask(tomorrow, "learn Angular", "high", Tanklin));
tasks.push(new WorkTask(nextDay, "group work", "medium", nic));
console.log(tasks);
