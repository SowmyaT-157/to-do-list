import {  Task } from "../src/intefaces/data";
import {addTask,tasks} from "../src/addTask/add";
describe("addTask for Todo Management ", () => {
beforeEach(() => {
  tasks.length = 0;      
});

test("addTask with description and autoincrement id", () => {
  const task1 = addTask("Buy milk");
  expect(task1).toEqual({ id: 1, description: "Buy milk", completed: false });
  const task2 = addTask("complete assignment");
  expect(task2).toEqual({ id: 2, description: "complete assignment", completed: false });
});
})

