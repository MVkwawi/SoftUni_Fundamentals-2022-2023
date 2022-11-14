function negativeOrPositiveNumbers(array) {
    let newArray = [];
    let arrayLength = array.length;

    for (let i = 0; i < arrayLength; i++) {
        let currentNum = Number(array[i]);

        if (currentNum < 0) {
            newArray.unshift(currentNum)
        } else if (currentNum >= 0) {
            newArray.push(currentNum);
        }
    }

    for (let j = 0; j < arrayLength; j++) {
        console.log(newArray[j]);
    }
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
negativeOrPositiveNumbers(['3', '-2', '0', '-1']);