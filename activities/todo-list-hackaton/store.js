import { loadData, saveData } from "./persistence.js";

export async function handleTasksState() {
    const tasksData = await loadData();
    const tasks = tasksData.tasks || [];
    let nextTaskId = tasksData.nextTaskId || 1;

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
        tasks.push({ id: nextTaskId++, desc: taskDesc, isCompleted: false });
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
        saveData({ nextTaskId, tasks });
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
