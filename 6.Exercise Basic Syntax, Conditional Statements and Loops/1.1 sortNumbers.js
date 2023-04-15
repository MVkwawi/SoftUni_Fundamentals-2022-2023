function sortNumbers(numOne, numTwo, numThree) {

    if (numOne > numTwo && numOne > numThree) {
       console.log(numOne);

        if (numTwo > numThree) {
            console.log(numTwo);
            console.log(numThree);
        } else {
            console.log(numThree);
            console.log(numTwo);
        }

    } else if (numTwo > numOne && numTwo > numThree) {
        console.log(numTwo);

        if (numOne > numThree) {
            console.log(numOne);
            console.log(numThree);
        } else {
            console.log(numThree);
            console.log(numOne);
        }

    } else if (numThree > numOne && numThree > numTwo) {
        console.log(numThree);

        if (numOne > numTwo) {
            console.log(numOne);
            console.log(numTwo);
        } else {
            console.log(numTwo);
            console.log(numOne);
        }
    }

}
sortNumbers(0,
    0,
    2,
    )