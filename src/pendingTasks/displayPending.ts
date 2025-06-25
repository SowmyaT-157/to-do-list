import { tasks } from "../addTask/add";
import { Task } from "../intefaces/data";
export function pendingTasks(): Task[] {
  return tasks.filter(task => !task.completed);
}