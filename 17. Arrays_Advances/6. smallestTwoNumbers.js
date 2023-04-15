function smallestTwoNumbers(array) {
    let increasingOrderArray = array.sort((a, b) => a - b);
    let arrayWithTwo = increasingOrderArray.slice(0, 2);
    console.log(arrayWithTwo.join(' '));
}
smallestTwoNumbers([30, 15, 50, 5]);
smallestTwoNumbers([3, 0, 10, 4, 7, 3]);