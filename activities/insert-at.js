function insertAt(arr, value, index) {
    if (index < 0 || index > arr.length) throw new Error("Invalid index");
    for (let i = arr.length; i > index; i--) {
    arr[i] = arr[i - 1]
    }

    arr[index] = value;

    return arr;
}

// Example
console.log(insertAt([1, 2, 4, 5, 6, 7, 8], 3, 2)); // [1, 2, 3, 4]
console.log(insertAt(["a", "c"], "b", 1)); // ["a", "b", "c"]
