import { tasks } from "../addTask/add";
export function markTaskDone(id: number): boolean {
  const task = tasks.find(t => t.id === id);
  if (!task) {
    return false;
  }
  task.completed = true;
  return true;
}