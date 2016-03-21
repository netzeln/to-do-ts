/// <reference path="to-do-classes-interfaces.ts" />

module ToDoList{
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

 export var describeTasksbyPriority = function(priority: string, taskCollection: Task[]): String[] {
   var descriptions: String[] = [];
   for(var task of taskCollection){
     if (task.priority === priority) {
       descriptions.push(task.description);
     }
   }
   return descriptions;
 }

 $(document).ready (function(event){
   $('#listAllTasks').click(function(event){
     $('#list').empty();
     console.log(tasks);
     for (var task of tasks){
       $('#list').append("<li>" + task.description + "</li>");
     }
   });

   $('#personTasks').click(function(event){
     var name = $('#personName').val();

     var tasksByPerson = describeTasksforPerson(people[name], tasks);
     console.log(tasksByPerson);
     $('#byPerson').empty();
     for (var task of tasksByPerson){
       $('#byPerson').append("<li>" + task + "</li>");
     }
   });

   $('#listByPriority').click(function(event){
     var priority = $('#priority').val();
     console.log(priority);
     var tasksByPriority = describeTasksbyPriority(priority, tasks);
     console.log(tasksByPriority);
     $('#byPriority').empty();
     for (var task of tasksByPriority){
       $('#byPriority').append("<li>" + task + "</li>");
     }
   });

   event.preventDefault;
 });
}
