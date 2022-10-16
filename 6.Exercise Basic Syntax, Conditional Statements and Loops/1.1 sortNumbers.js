function sortNumbers(numOne, numTwo, numThree) {
    let one = 0;
    let two = 0;
    let three = 0;

    if (numOne > numTwo && numOne > numThree) {
        one = numOne;

        if (numTwo > numThree) {
            two = numTwo;
            three = numThree;
        } else {
            two = numThree;
            three = numTwo;
        }

    } else if (numTwo > numOne && numTwo > numThree) {
        one = numTwo;

        if (numOne > numThree) {
            two = numOne;
            three = numThree;
        } else {
            two = numThree;
            three = numOne;
        }

    } else if (numThree > numOne && numThree > numTwo) {
        one = numThree;

        if (numOne > numTwo) {
            two = numOne;
            three = numTwo;
        } else {
            two = numTwo;
            three = numThree;
        }
    }

    console.log(one);
    console.log(two);
    console.log(three);
}
sortNumbers(0,
    0,
    2,
    )