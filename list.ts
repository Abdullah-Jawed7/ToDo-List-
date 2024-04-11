#!  /usr/bin/env node

import inquirer from "inquirer";
let todos: any[] = [];
let condition = true;
//  Function for removing a task
let removeTask = async () => {
  await viewTasks();
  let deleteItem = await inquirer.prompt({
    name: "remove",
    type: "input",
    message: `Enter the number of the task you want delete:`,
  });
  // Deleting the selected item from array
  let deletedtask = todos.splice(deleteItem.remove - 1 ,1);
  console.log(`\n ${deletedtask} is successfully deleted from your todos `);
};







do {
  const addtask = await inquirer.prompt([
    {
      name: "todo",
      type: "list",
      message: "What you want to perform with your Todos ?",
      choices: ["Add Task","Delete Task", "View All Tasks", "Exit"],
    },
  ]);
  if (addtask.todo == "Add Task") {
    const task = await inquirer.prompt([
      {
        name: "yourTask",
        type: "input",
        message: "Enter your Task ",
      },
    ]);
    todos.push(task.yourTask);
    console.log(todos);
  } else if (addtask.todo === "View All Tasks") {
    //console.log("Your Tasks are :" + todos);
    await viewTasks();
  }
  else if (addtask.todo == "Delete Task"){
     await removeTask()
  }
  else {
    condition = false;
  }
} while (condition);

// Function for view task
function viewTasks() {
  console.log("\n Your tasks are as follows:\n");
  todos.forEach((task, index) => {
    console.log(`${index + 1}- ${task}`);
  });
}

/*  Function for removing a task
let removeTask = async () => {
  await viewTasks();
  let deleteItem = await inquirer.prompt({
    name: "remove",
    type: "input",
    message: `Enter the number of the task you want delete:`,
  });
  // Deleting the selected item from array
  let deletedtask = todos.slice(deleteItem.remove - 1);
  console.log(`\n ${deletedtask} is successfully deleted from your todos `);
};*/
