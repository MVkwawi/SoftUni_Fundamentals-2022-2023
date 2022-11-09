function fractorialDivision(numOne, numTwo) {
    let fractorial = 1;

    for (let i = 1; i <= numOne; i ++) {
        fractorial = fractorial * i;
    }

    let division = fractorial / numTwo;

    console.log(division.toFixed(2));
}
fractorialDivision(6, 2);