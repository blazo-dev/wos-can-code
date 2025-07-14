import {
    menuOptions,
    MenuOption,
    NOT_FOUND_MESSAGE,
    askInput,
    repeatAction,
    isValidText,
    displayMenu,
    rl,
} from "./utils.js";
import { handleTasksState } from "./store.js";
const {
    ADD_TASK,
    COMPLETE_TASK,
    DELETE_TASK,
    UPDATE_TASK,
    DISPLAY_TASKS,
    EXIT,
} = MenuOption;

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
            case DISPLAY_TASKS:
                displayTasks();
                break;

            case ADD_TASK:
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

            case COMPLETE_TASK:
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

            case DELETE_TASK:
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

            case UPDATE_TASK:
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
