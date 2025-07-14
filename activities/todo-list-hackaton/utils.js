import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

export const menuOptions = [
    "1️⃣: View tasks",
    "2️⃣: Add task",
    "3️⃣: Complete task",
    "4️⃣: Delete task",
    "5️⃣: Update task",
    "6️⃣: Exit",
];

export const MenuOption = Object.freeze({
    DISPLAY_TASKS: 1,
    ADD_TASK: 2,
    COMPLETE_TASK: 3,
    DELETE_TASK: 4,
    UPDATE_TASK: 5,
    EXIT: menuOptions.length,
});

export const NOT_FOUND_MESSAGE =
    "\n⚠️ Task not found. Please choose a valid task number from the list.";

export const rl = createInterface({ input, output });

export function askInput(message) {
    return rl.question(message);
}

export async function repeatAction(promptMessage, actionFn) {
    let repeat = "n";
    do {
        await actionFn();
        repeat = await askInput(`\n${promptMessage} (Y/n): `);
        console.clear();
    } while (repeat.toLowerCase() === "y");
}

export function displayMenu(options) {
    console.log("\n📋 Menu\n");
    for (const option of options) {
        console.log(option);
    }
}

export function isValidText(text) {
    if (text.trim().length === 0)
        return "⚠️ Text cannot be empty. Please enter something!";
    return true;
}
