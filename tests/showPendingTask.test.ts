
import { addTask,tasks } from "../src/addTask/add";
import { markTaskDone } from "../src/markDone/done";

describe("getPendingTasks for Todo Management", () => {
  beforeEach(() => {
    tasks.length = 0; // Reset tasks before each test
  });

  test("should return only tasks that are not completed", () => {
    const task1 = addTask("Buy groceries");
    const task2 = addTask("Do homework");
    markTaskDone(task2.id);
    const pending = pendingTasks();
    expect(pending).toEqual([
      { id: task1.id, description: task1.description, completed: false },
    ]);
    expect(pending.length).toBe(2);
  });

  test("should return empty array when all tasks are completed", () => {
    const task1 = addTask("go ride");
    markTaskDone(task1.id);
    const pending = pendingTasks();
    expect(pending).toEqual([]);
  });
});