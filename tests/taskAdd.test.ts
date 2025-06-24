
import {Task} from "../src/intefaces/data"

beforeEach(() => {
  tasks.length = 0;      
});

test("addTask with description and autoincrement id", () => {
  const task1 = addTask("Buy milk");
  expect(task1).toEqual({ id: 1, description: "Buy milk", completed: false });

});