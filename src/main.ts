console.log("TO - Do App...")
import { addTask,tasks}  from "./addTask/add";


addTask("Buy milk");
addTask("finish assignment");
addTask("clean the room");


tasks.forEach(task => {
  console.log(`task: {
  id: ${task.id};
  description: "${task.description}";
  Completed: ${task.completed};
}`);
});