const array = [1, 2, 3, 4, 5];

//! Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  const sorted = arr.sort();
  let max = 0;
  for (let i = 0; i <= array.length - 1; i++) {
    max += sorted[i];
  }

  let withoutLast = max - sorted[sorted.length - 1];
  let withoutFirst = max - sorted[0];

  return `${withoutLast} ${withoutFirst}`;
}

console.log(miniMaxSum(array));
