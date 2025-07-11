import { readFile, writeFile } from "node:fs/promises";
const filePath = "./tasksData.json";

// Save data to file
export async function saveData(data) {
    await writeFile(filePath, JSON.stringify(data, null, 2));
}

// Load data from file
export async function loadData() {
    try {
        const content = await readFile(filePath, "utf-8");
        return JSON.parse(content);
    } catch (err) {
        if (err.code === "ENOENT") {
            return [];
        } else {
            throw err;
        }
    }
}
