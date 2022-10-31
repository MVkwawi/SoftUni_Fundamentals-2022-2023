function magicSum(arr, magicNum) {
  let arrLength = arr.length;

  for (let index = 0; index < arrLength; index++) {
    let currentNum = arr[index];

    for (let j = index + 1; j < arrLength; j++) {
      let nextNum = arr[j];
      if (currentNum + nextNum === magicNum) {
        console.log(`${currentNum} ${nextNum}`);
      }
    }
  }
}
magicSum([14, 20, 60, 13, 7, 19, 8],
    27
    );
