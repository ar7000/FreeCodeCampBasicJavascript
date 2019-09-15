function nextInLine(arr, item) {
  arr.push(item);
  var removedItem = arr.shift();
  return removedItem; 
}

var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));