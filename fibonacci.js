function fibs(n) {
  if (n <= 0) throw new Error("'n' must be bigger than 0");
  const arr = [0];
  if (n !== 1) {
    arr.push(1);
  }
  for (let index = 2; index < n; index++) {
    arr.push(arr[index - 1] + arr[index - 2]);
  }
  return arr;
}

function fibsRec(n) {
  if (n <= 0) throw new Error("'n' must be bigger than 0");
  const arr = [0];
  if (n !== 1) {
    arr.push(1);
  }
  if (n <= 2) return arr;

  const arr2 = fibsRec(n - 1);
  arr.push(...arr2.slice(2));
  arr.push(arr2[arr2.length - 1] + arr2[arr2.length - 2]);
  return arr;
}
// Alternate to fibsRec. Didn't like the idea of instantiating array n times. 
function fibsRec2(n, arr = n !== 1 ? [0, 1] : [0]) {
  if (n <= 0) throw new Error("'n' must be bigger than 0");
  if (n <= 2) return arr;

  fibsRec2(n - 1, arr);
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return arr;
}

function showFibs(n, showOnlyTime = false) {
  console.time("fibs");
  const result1 = fibs(n);
  console.timeEnd("fibs");

  console.time("fibsRec");
  const result2 = fibsRec(n);
  console.timeEnd("fibsRec");

  console.time("fibsRec2");
  const result3 = fibsRec2(n);
  console.timeEnd("fibsRec2");
  
  if(showOnlyTime)
  console.log(result1, result2, result3);
}
