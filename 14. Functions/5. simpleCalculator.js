function calculator(numOne, numTwo, operator) {
    let result;

    switch (operator) {
        case 'multiply': result = (a, b) => numOne * numTwo; break;
        case 'divide': result = (a, b) => numOne / numTwo; break;
        case 'add': result = (a, b) => numOne + numTwo; break;
        case 'subtract': result = (a, b) => numOne - numTwo; break;
    }

    console.log(result());
}
calculator(5,
    5,
    'multiply'
    );
