function toObj(arr1, arr2) {
  const obj = {};
  Array.prototype.forEach.call(arr1, (key, index) => {
    obj[key] = arr2[arr2.length - 1 - index];
  });
  return obj;
}

console.log(toObj(['a', 'b'], [3]));
