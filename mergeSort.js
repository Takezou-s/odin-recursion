function mergeSort(arr) {
  if (!Array.isArray(arr)) throw new Error("Argument must be an array");
  if (arr.length <= 1) return arr;

  const splitIndex = Math.floor(arr.length / 2);
  const arr1 = mergeSort(arr.slice(0, splitIndex));
  const arr2 = mergeSort(arr.slice(splitIndex));

  return sortArrays(arr1, arr2);
}

function sortArrays(arr1, arr2, resultArr = []) {
  if (arr1.length > 0 && arr2.length > 0) {
    resultArr.push(arr1[0] <= arr2[0] ? arr1.shift() : arr2.shift());
    sortArrays(arr1, arr2, resultArr);
  } else {
    resultArr.push(...arr1, ...arr2);
  }
  return resultArr;
}

function sort() {
  const arr1 = [-35, 20, 30, 11, 33, -28, -9, -25, -45, -13, 18, -50, 16, 39, -42];
  console.log(arr1);
  console.log(mergeSort(arr1));
  console.log("---------------");
  
  const arr2 = [45, -19, 34, 47, 46, 16, 14, 20, -42, 6, -6, -39];
  console.log(arr2);
  console.log(mergeSort(arr2));
  console.log("---------------");

  const arr3 = [31, 27, 35, -42, 35, 37, 34, 13, 35, -36, 0, -48, -27, -2, 44, 35];
  console.log(arr3);
  console.log(mergeSort(arr3));
  console.log("---------------");
}
