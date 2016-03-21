/// <reference path="to-do-classes-interfaces.ts" />
module ToDoList {
  var nic: ToDoList.IPerson = {
    name: "nic",
    email: "solidtimeofchange@yahoo.com"
  }

  var tanklin: ToDoList.IPerson = {
    name: "Tanklin Franklin",
    email: "Tanksy@notarealplace.biz",
    phone: "555-867-5309"
  }

  var hamilton: ToDoList.IPerson = {
    name: "alex",
    email: "CashMoney@1792treasury.gov"
  }

  export var people = {
    "nic": nic,
    "tanklin": tanklin,
    "hamilton": hamilton
  };
}
