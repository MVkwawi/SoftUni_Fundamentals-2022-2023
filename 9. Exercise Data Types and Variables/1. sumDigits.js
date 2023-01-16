function sum(num) {
    let numToString = num.toString();
    let sumOfDigits = 0;
    let numLength = numToString.length;

    for (let index = 0; index < numLength; index ++) {
        let currentNum = Number(numToString[index]);
        sumOfDigits += currentNum;
    }
    console.log(sumOfDigits);
}
sum(245678)