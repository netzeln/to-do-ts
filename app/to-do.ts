class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}

class HomeTask extends Task {}

class HobbyTask extends Task {
  constructor(public description: string){
    super(description, "low");
  }
}

class WorkTask extends Task {
  constructor(public dueDate: Date, public description: string, public priority: string){
    super(description, priority);
  }
}

var tasks =[];
tasks.push(new HomeTask("Do JS Homework", "High"));
tasks.push(new HomeTask("Eat Sardines", "High"));
tasks.push(new HomeTask("Install Hose Holder", "low"));

tasks.push(new HobbyTask("Watch Daredevil"));
tasks.push(new HobbyTask("play on computer"));

var today = new Date();
var tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);
var nextDay = new Date();
nextDay.setDate(today.getDate() + 2);

tasks.push(new WorkTask(today, "Finish this lesson", "high"));
tasks.push(new WorkTask(tomorrow, "learn Angular", "high"));
tasks.push(new WorkTask(nextDay, "group work", "medium"));

console.log(tasks);
