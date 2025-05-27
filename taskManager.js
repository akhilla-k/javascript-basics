// 1. Initialize an empty array to store tasks
let tasks = [];

// 2. Function to add a task
function addTask() {
  let taskCount = Number(prompt("Enter how many tasks you need to do:"));
  for (let i = 0; i < taskCount; i++) {
    let job = prompt(`Enter Task ${i + 1}:`);
    tasks.push(job.toLowerCase());
  }
}

// 3. Function to remove a task
function removeTask() {
  let taskName = prompt("Enter the name of the task you completed:").toLowerCase();
  if (tasks.includes(taskName)) {
    let index = tasks.indexOf(taskName);
    tasks.splice(index, 1);
    console.log(`Task "${taskName}" removed.`);
  } else {
    console.log("Task not found.");
  }
}

// 4. Function to list all tasks
function listTasks() {
  if (tasks.length === 0) {
    console.log("No tasks found.");
  } else {
    console.log("Current tasks:");
    for (let i = 0; i < tasks.length; i++) {
      console.log(`${i + 1}. ${tasks[i]}`);
    }
  }
}

// 5. Main menu function
function mainMenu() {
  while (true) {
    let choice = prompt("Choose an action:\n1: Add Task\n2: Remove Task\n3: List Tasks\n4: Exit");
    if (choice === "1") {
      addTask();
    } else if (choice === "2") {
      removeTask();
    } else if (choice === "3") {
      listTasks();
    } else if (choice === "4") {
      console.log("Exiting Task Manager. Goodbye!");
      break;
    } else {
      console.log("Invalid choice. Please try again.");
    }
  }
}

mainMenu();
