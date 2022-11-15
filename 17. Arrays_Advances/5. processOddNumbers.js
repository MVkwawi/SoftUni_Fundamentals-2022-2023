function processOddNumbers(numbers) {
    let oddIndexes = numbers.filter((_, i) => i % 2 !== 0);
    let doubleNewArray = oddIndexes.map(num => num * 2);
    let reversedNewArray = doubleNewArray.reverse();
    console.log(reversedNewArray.join(' '));
}
processOddNumbers([10, 15, 20, 25]);