function reverseArr(items) {
  if (items.length === 0) return items;

  let right = items.length - 1
  for (let left = 0; left < Math.floor(items.length / 2); left++) {
    let element = items[left];
    items[left]=items[right]
    items[right] = element
    right--;
  }
  return items;
}

console.table({reversedArr: reverseArr([1, 2, 3, 4, 5, 6, 7, 8])})