let value = [];
let valueNow = 0;
let valueNext = 0;

function findMax(arr) {
  value = arr;
  valueNow = value[0];
  for (let i = 0; i < value.length; i++) {
    valueNext = value[i] + 1;
    if (valueNow < valueNext) {
      valueNow = value[i];
    }
  }
  console.log(valueNow);
}

findMax([1, 2, 3, 4, 5, 6, 7, 8, 9]);
