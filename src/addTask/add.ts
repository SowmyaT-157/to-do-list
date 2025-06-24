import { Task } from "../intefaces/data";

let taskId = 1;
export const tasks:Task[] = [];
export function addTask(description: string): Task {
  const task: Task = {
    id: taskId++,
    description,
    completed: false
  };
  tasks.push(task);
  return task;
}