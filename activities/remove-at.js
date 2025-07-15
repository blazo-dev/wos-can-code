// removeAt

const arr = [1,2,3,4,5,6]
const at = 2;

function removeAt(arr, at) {
  if(at < 0 || at >= arr.length) return undefined;
  const removedElement = arr[at]
  
  for(let i = at;i < arr.length - 1; i++){
    arr[i]=arr[i+1]
  }
  
  arr.length--;
  
  return removedElement;
}

console.table({previousArr: arr})
removeAt(arr, at)
console.table({modifiedArr: arr})