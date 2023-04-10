//smallest number with Math.min
function smallestNumber(numOne, numTwo, numThree) {
    let theSmallestNumber = Math.min(numOne, numTwo, numThree);
    console.log(theSmallestNumber);
}
smallestNumber(-600, 342, 123);

//largest number with Math.max
function largestNumber(numOne, numTwo, numThree) {
    let theLargestNumber = Math.max(numOne, numTwo, numThree);
    console.log(theLargestNumber);
}
largestNumber(600, 342, 123);

//smallest number with 'if's
function smallestNumberTwo(numOne, numTwo, numThree) {
    let smallestNum;
    if (numOne < numTwo && numOne < numThree) {
        smallestNum = numOne;
    } else if (numTwo < numOne && numTwo < numThree) {
        smallestNum = numTwo;
    } else {
        smallestNum = numThree;
    }

    console.log(smallestNum);
}
smallestNumberTwo(600, 342, 123);

//smallest number with array + Math.max
function smallestNumWithArray(array) {
    console.log(Math.min(...array));
}
smallestNumWithArray([600, -342, 123]);