function condenseArray(numbers) {
  let array = [];

  for (let i = 0; i < numbers.length; i ++) {
    array[i] = numbers[i];
  }

  while (array.length > 1) {
    let condensedArray = [];

    for(let j = 0; j < array.length - 1; j ++) {
        condensedArray[j] = array[j] + array[j + 1];
    }
    array = condensedArray;
  }
console.log(array.toString());
}
condenseArray([2,10,3])