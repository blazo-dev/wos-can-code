import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { loadData, saveData } from "./persistence.js";

const rl = createInterface({ input, output });

async function handleTasksState() {
    const tasksData = await loadData();
    const tasks = tasksData.tasks || [];
    let taskCounter = tasksData.taskCounter || 1;

    const displayTasks = () => {
        if (tasks.length === 0) {
            console.log("\n📭 No tasks yet — let's get started!");
            return;
        }

        for (const task of tasks) {
            console.log(
                `[${task.id}]: [${task.isCompleted ? "X" : " "}] ${task.desc}`
            );
        }
    };

    const getTask = (taskId) => {
        return tasks.find((task) => task.id === taskId);
    };

    const addTask = (taskDesc) => {
        tasks.push({ id: taskCounter++, desc: taskDesc, isCompleted: false });
    };

    const deleteTask = (taskId) => {
        const index = tasks.findIndex((task) => task.id === taskId);
        if (index !== -1) {
            tasks.splice(index, 1);
        }
    };

    const updateTask = (taskToUpdate, newDesc) => {
        taskToUpdate.desc = newDesc;
    };

    const persistData = () => {
        saveData({ taskCounter, tasks });
    };

    return {
        addTask,
        deleteTask,
        updateTask,
        getTask,
        displayTasks,
        persistData,
        tasks,
    };
}

function askInput(message) {
    return rl.question(message);
}

function displayMenu(options) {
    console.log("\n📋 Menu\n");
    for (const option of options) {
        console.log(option);
    }
}

function isValidText(text) {
    if (text.trim().length === 0)
        return "⚠️ Text cannot be empty. Please enter something!";
    return true;
}

async function startGame() {
    const {
        addTask,
        deleteTask,
        updateTask,
        getTask,
        displayTasks,
        persistData,
        tasks,
    } = await handleTasksState();
    let leaveGame = false;
    const menuOptions = [
        "1️⃣: View tasks",
        "2️⃣: Add task",
        "3️⃣: Complete task",
        "4️⃣: Delete task",
        "5️⃣: Update task",
        "6️⃣: Exit",
    ];

    console.clear();
    console.log("📝 Welcome to the To-do List!");

    while (!leaveGame) {
        displayMenu(menuOptions);
        const userOption = await askInput(
            `\n👉 Choose an option (1-${menuOptions.length}): `
        );
        console.clear();

        switch (+userOption) {
            case 1:
                displayTasks();
                break;

            case 2:
                let continueAdding = "n";
                do {
                    const taskDesc = await askInput("\n🆕 Enter a new task: ");
                    const validation = isValidText(taskDesc);
                    if (validation !== true) {
                        console.log(validation);
                        break;
                    }

                    addTask(taskDesc);
                    console.log("\n✅ Task added successfully!");

                    continueAdding = await askInput(
                        "\n🔁 Add another? (Y/n): "
                    );
                    console.clear();
                } while (continueAdding.toLowerCase() === "y");
                break;

            case 3:
                if (tasks.length === 0) {
                    console.log("\n📭 No tasks to complete!");
                    break;
                }

                let continueCompleting = "n";
                do {
                    displayTasks();
                    const taskId = await askInput("\n✅ Which task is done?: ");
                    const taskToComplete = getTask(+taskId);

                    if (!taskToComplete) {
                        console.log(
                            "⚠️ Task not found. Please choose a valid task number from the list."
                        );
                        break;
                    }

                    taskToComplete.isCompleted = !taskToComplete.isCompleted;
                    console.log("\n✅ Task status toggled!");

                    continueCompleting = await askInput(
                        "\n🔁 Complete another? (Y/n): "
                    );
                    console.clear();
                } while (continueCompleting.toLowerCase() === "y");
                break;

            case 4:
                if (tasks.length === 0) {
                    console.log("\n📭 No tasks to delete!");
                    break;
                }

                let continueDeleting = "n";
                do {
                    displayTasks();
                    const taskId = await askInput(
                        "\n🗑️  Which task would you like to delete?: "
                    );
                    const taskToDelete = getTask(+taskId);

                    if (!taskToDelete) {
                        console.log(
                            "⚠️ Task not found. Please choose a valid task number from the list."
                        );
                        break;
                    }

                    deleteTask(+taskId);

                    console.log("\n🗑️  Task deleted successfully!");
                    continueDeleting = await askInput(
                        "\n🔁 Delete another? (Y/n): "
                    );
                    console.clear();
                } while (continueDeleting.toLowerCase() === "y");
                break;

            case 5:
                if (tasks.length === 0) {
                    console.log("\n📭 No tasks to update!");
                    break;
                }

                let continueUpdating = "n";
                do {
                    displayTasks();
                    const taskId = await askInput(
                        "\n🔃 Which task would you like to update?: "
                    );
                    const taskToUpdate = getTask(+taskId);

                    if (!taskToUpdate) {
                        console.log(
                            "⚠️ Task not found. Please choose a valid task number from the list."
                        );
                        break;
                    }

                    const newDesc = await askInput(
                        "\n✏️  Enter new task's description: "
                    );
                    const validation = isValidText(newDesc);
                    if (validation !== true) {
                        console.log(validation);
                        break;
                    }

                    updateTask(taskToUpdate, newDesc);

                    console.log("\n✏️  Task updated successfully!");
                    continueUpdating = await askInput(
                        "\n🔁 Update another? (Y/n): "
                    );
                    console.clear();
                } while (continueUpdating.toLowerCase() === "y");
                break;

            case 6:
                console.log("\n👋 Goodbye! Stay organized!\n");
                leaveGame = true;
                break;

            default:
                console.log(
                    `\n❌ Invalid option. Please enter a number between 1 and ${menuOptions.length}.`
                );
                break;
        }
        persistData();
    }

    rl.close();
}

startGame();
