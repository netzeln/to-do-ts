class Task {
  done: boolean = false;
  constructor(public description: string, public priority: string){}
  markDone(){
    this.done = true;
  }
}

var tasks =[];
tasks.push(new Task("Do JS Homework", "High"));
tasks.push(new Task("Watch Daredevil", "low"));
tasks.push(new Task("Eat Sardines", "High"));
tasks[0].markDone();
console.log(tasks);
