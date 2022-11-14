function firstAndLastKNumbers(array) {
    let kNumber = array.shift();

    let firstArray = array.slice(0, kNumber);
    let secondArray = array.slice(array.length - kNumber);

    console.log(firstArray.join(' '));
    console.log(secondArray.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3,6, 7, 8, 9]);