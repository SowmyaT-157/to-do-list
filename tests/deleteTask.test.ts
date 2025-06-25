import { addTask, tasks } from "../src/addTask/add";
import{deleteTask} from "../src/deleteTask/delete"

describe("deleteTask for Todo Management", () => {
  beforeEach(() => {
    tasks.length = 0; 
  });

  test("It delete task for valid ID", () => {
    const task = addTask("Test task");
    const result = deleteTask(task.id);

    expect(result).toBe(true);
    expect(tasks.length).toBe(0);
  });

  test("It return false for invalid ID", () => {
    addTask("Sample task");
    const result = deleteTask(32); 

    expect(result).toBe(false);
    expect(tasks.length).toBe(1);
  });
});
