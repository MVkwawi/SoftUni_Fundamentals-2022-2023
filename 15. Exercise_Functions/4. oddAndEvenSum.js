function oddAndEvenSums(number) {
    let numberToString = number.toString();
    let evenSum = 0;
    let oddSum = 0;
    let numberToStringLength = numberToString.length;

    for (let index = 0; index < numberToStringLength; index ++) {
        let currentNum = Number(numberToString[index]);

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSums(3495892137259234);
