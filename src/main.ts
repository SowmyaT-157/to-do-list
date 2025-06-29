console.log("TO - Do App...")
import { addTask,tasks}  from "./addTask/add";
import { markTaskDone } from "./markDone/done";
import { pendingTasks}  from "./pendingTasks/displayPending";
import { deleteTask } from "./deleteTask/delete";


addTask("Buy milk");
addTask("finish assignment");
addTask("clean the room");


const success = markTaskDone(3);
if (success) {
  console.log("\n Task with ID  marked as completed.\n");
} else {
  console.log("\n Task with ID 2 not found.\n");
}
const invalid = markTaskDone(10);
if (!invalid) {
  console.log("\n Task with ID 10 not found.\n");
}


tasks.forEach(task => {
  console.log(`task: {
  id: ${task.id};
  description: "${task.description}";
  Completed: ${task.completed};
}`);
});


const pending = pendingTasks();
console.log("Pending Tasks:");
pending.forEach(task => {
  console.log(`ID: ${task.id}, Description: ${task.description}, Completed: ${task.completed}`);
});




const isDeleted = deleteTask(2);
if (isDeleted) {
  console.log("Task with ID 2 deleted.");
} else {
  console.log("Task with ID 2  not found.");
}
