function signIsPositiveOrNegative(numOne, numTwo, numThree) {
  if (positiveOrNegative(numOne, numTwo, numThree) % 2 === 1) {
    console.log("Negative");
  } else {
    console.log("Positive");
  }
}

let positiveOrNegative = (numOne, numTwo, numThree) => {
  let arr = [];
  arr.push(numOne);
  arr.push(numTwo);
  arr.push(numThree);

  let negatives = 0;

  for (const num of arr) {
    if (num < 0) {
      negatives += 1;
    }
  }

  return negatives;
};

signIsPositiveOrNegative(-5, 1, 1);
signIsPositiveOrNegative(-6, -12, 14);
signIsPositiveOrNegative(-1, -2, -3);
signIsPositiveOrNegative(-5, 1, 1);
