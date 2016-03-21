/// <reference path="to-do-classes-interfaces.ts" />
/// <reference path="to-do-people.ts" />
/// <reference path="to-do-listing-functions.ts" />


var people = ToDoList.people;

var tasks = [];

tasks.push(new ToDoList.HomeTask("Do JS Homework", "High", people.nic));
tasks.push(new ToDoList.HomeTask("Scan Tax stuff", "High", people.hamilton));
tasks.push(new ToDoList.HomeTask("Scan Tax stuff", "High", people.nic));
tasks.push(new ToDoList.HomeTask("Install Hose Holder", "low"));

tasks.push(new ToDoList.HobbyTask("Watch Daredevil"));
tasks.push(new ToDoList.HobbyTask("play on computer"));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new ToDoList.WorkTask(today, "Finish this lesson", "high", people.tanklin));
tasks.push(new ToDoList.WorkTask(today, "Be good at Javascript", "High", people.nic));
tasks.push(new ToDoList.WorkTask(today, "learnTypescript", "High", people.nic));
tasks.push(new ToDoList.WorkTask(tomorrow, "learn Angular", "high", people.tanklin));
tasks.push(new ToDoList.WorkTask(nextDay, "group work", "medium", people.nic));

console.log(tasks);

var nicTasks = ToDoList.describeTasksforPerson(people.nic, tasks);
console.log("here's what nic needs to do: " );
for(var task of nicTasks){
    console.log(task);
}
