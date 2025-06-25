import { addTask,tasks } from "../src/addTask/add";
import{markTaskDone} from "../src/markDone/done";
describe("markTaskAsDone for Todo Management", () => {
  beforeEach(() => {
    tasks.length = 0; 
  });

  test("mark task as completed for valid ID", () => {
    const task = addTask("Submit assignment...");
    const result = markTaskDone(task.id);

    expect(result).toBe(true);
    expect(task.completed).toBe(true);
  });

  test("It return false if task ID does not exist", () => {
    addTask("Go to school");

    const result = markTaskDone(15); 
    expect(result).toBe(false);
  });
})