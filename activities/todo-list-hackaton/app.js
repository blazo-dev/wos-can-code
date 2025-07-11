import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { loadData, saveData } from "./persistence.js";
import { menuOptions, MenuOption, NOT_FOUND_MESSAGE } from "./utils.js";
const { ADD, COMPLETE, DELETE, EXIT, UPDATE, VIEW } = MenuOption;

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

async function repeatAction(promptMessage, actionFn) {
    let repeat = "n";
    do {
        await actionFn();
        repeat = await askInput(`\n${promptMessage} (Y/n): `);
        console.clear();
    } while (repeat.toLowerCase() === "y");
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

    console.clear();
    console.log("📝 Welcome to the To-do List!");

    while (!leaveGame) {
        displayMenu(menuOptions);
        const userOption = await askInput(
            `\n👉 Choose an option (1-${menuOptions.length}): `
        );
        console.clear();

        switch (+userOption) {
            case VIEW:
                displayTasks();
                break;

            case ADD:
                await repeatAction("🆕🔁 Add another?", async () => {
                    const taskDesc = await askInput("\n🆕 Enter a new task: ");
                    const validation = isValidText(taskDesc);
                    if (validation !== true) {
                        console.log(validation);
                        return;
                    }

                    addTask(taskDesc);
                    console.log("\n✅ Task added successfully!");
                });

                break;

            case COMPLETE:
                if (tasks.length === 0) {
                    console.log("\n📭 No tasks to complete!");
                    break;
                }

                await repeatAction("✅🔁 Complete another?", async () => {
                    displayTasks();
                    const taskId = await askInput(
                        "\n✅ Which task would you like to complete?: "
                    );
                    const taskToComplete = getTask(+taskId);

                    if (!taskToComplete) {
                        console.log(
                            "\n⚠️ Task not found. Please choose a valid task number from the list."
                        );
                        return;
                    }

                    taskToComplete.isCompleted = !taskToComplete.isCompleted;
                    console.log("\n✅ Task status toggled!");
                });
                break;

            case DELETE:
                if (tasks.length === 0) {
                    console.log("\n📭 No tasks to delete!");
                    break;
                }

                await repeatAction("🗑️🔁 Delete another?", async () => {
                    displayTasks();
                    const taskId = await askInput(
                        "\n🗑️  Which task would you like to delete?: "
                    );
                    const taskToDelete = getTask(+taskId);

                    if (!taskToDelete) {
                        console.log(NOT_FOUND_MESSAGE);
                        return;
                    }

                    deleteTask(+taskId);
                    console.log("\n🗑️  Task deleted successfully!");
                });
                break;

            case UPDATE:
                if (tasks.length === 0) {
                    console.log("\n📭 No tasks to update!");
                    break;
                }

                await repeatAction("✏️🔁 Update another?", async () => {
                    displayTasks();
                    const taskId = await askInput(
                        "\n✏️ Which task would you like to update?: "
                    );
                    const taskToUpdate = getTask(+taskId);

                    if (!taskToUpdate) {
                        console.log(NOT_FOUND_MESSAGE);
                        return;
                    }

                    const newDesc = await askInput(
                        "\n✏️  Enter new task's description: "
                    );
                    const validation = isValidText(newDesc);
                    if (validation !== true) {
                        console.log(validation);
                        return;
                    }

                    updateTask(taskToUpdate, newDesc);

                    console.log("\n✏️  Task updated successfully!");
                });
                break;

            case EXIT:
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
