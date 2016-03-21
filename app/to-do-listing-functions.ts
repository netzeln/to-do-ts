/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList{
  // export var listTasks = function(): String[]{
  //   var descriptions: String[] = [];
  //   for(var task of taskCollection){
  //     descriptions.push(task.description);
  //   }
  //   return descriptions;
  // }

  $(document).ready (function(event){
    $('#listAllTasks').click(function(event){
      // var tasks = listTasks();
console.log(Task);
      console.log(tasks);
      for (var task of tasks){
        $('#list').append("<li>" + task.description + "</li>");
      }
    });
  });
  export var describeTasksforPerson = function(assignee: IPerson, taskCollection: Task[]): String[] {
    var descriptions: String[] = [];
    for(var task of taskCollection){
      if(task.assignedTo === assignee) {
        descriptions.push(task.description);
      }
    }
    return descriptions;
  }

  // export var describeTasksofType = function(type: ITask, taskCollection: Task[]): String[]{
  //   var descriptions: String[] = [];
  //   for(var task of taskCollection){
  //     if(task.)
  //   }
  // }

 export var describeTaskbyPriority = function(priority: string, taskCollection: Task[]): String[] {
   var descriptions: String[] = [];
   for(var task of taskCollection){
     if (task.priority === priority) {
       descriptions.push(task.priority);
     }
   }
   return descriptions;
 }
}
