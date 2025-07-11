export const menuOptions = [
    "1️⃣: View tasks",
    "2️⃣: Add task",
    "3️⃣: Complete task",
    "4️⃣: Delete task",
    "5️⃣: Update task",
    "6️⃣: Exit",
];

export const MenuOption = Object.freeze({
    VIEW: 1,
    ADD: 2,
    COMPLETE: 3,
    DELETE: 4,
    UPDATE: 5,
    EXIT: menuOptions.length,
});

export const NOT_FOUND_MESSAGE =
    "\n⚠️ Task not found. Please choose a valid task number from the list.";
