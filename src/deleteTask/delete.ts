import { tasks } from "../addTask/add";
import { Task } from "../intefaces/data";

export function deleteTask(id: number): boolean {
  const index = tasks.findIndex(task => task.id === id);
  if (index === -1) return false;

  tasks.splice(index, 1); 
  return true;
}