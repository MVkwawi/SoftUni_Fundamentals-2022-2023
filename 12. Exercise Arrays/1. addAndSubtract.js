function addAndSubtract(input) {
    let newArray = [];
    let oldArraySum = 0;
    let newArraySum = 0;
    let arrayLength = input.length;

    for(let i = 0; i < arrayLength; i ++) {
        let currentNum = input[i];
        let oddNum = currentNum - i;
        let evenNum = currentNum + i;

        if (currentNum % 2 === 0) {
            newArray.push(evenNum);
        } else {
            newArray.push(oddNum);
        }
        
        oldArraySum += currentNum;
        newArraySum += newArray[i];
    }

    console.log(newArray);
    console.log(oldArraySum);
    console.log(newArraySum);
}
addAndSubtract([-5, 11, 3, 0, 2]);