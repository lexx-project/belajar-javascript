let arrayUnik = [];

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    let namaperIndex = arr[i];
    if (!arrayUnik.includes(namaperIndex)) {
      arrayUnik.push(namaperIndex);
    }
  }
  console.log(arrayUnik);
}

removeDuplicates([1, 2, 3, 4, 5, 2, 3, 4]);
