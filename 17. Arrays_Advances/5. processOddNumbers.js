function processOddNumbers(numbers) {
    let oddIndexes = numbers.filter((_, i) => i % 2 !== 0);
    let doubleNewArray = oddIndexes.map(num => num * 2);
    let reversedNewArray = doubleNewArray.reverse();
    console.log(reversedNewArray.join(' '));
}
processOddNumbers([10, 15, 20, 25]);

function processOddNumbersTwo(numbers) {
    let newArray = numbers.filter((_, i) => i % 2 !== 0)
        .map(num => num * 2)
        .reverse();

    console.log(newArray.join(' '));
}
processOddNumbersTwo([3, 0, 10, 4, 7, 3]);