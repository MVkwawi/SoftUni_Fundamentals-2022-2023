function printNthElement(arr) {
    let arrLength = arr.length;
    const nthStep = arr.splice(arrLength - 1, 1).map(Number);

    let newArr = [];
    let nextStep = 1;

    for (let i = 1; i <= arrLength; i ++) {
        if (nextStep === i) {
            newArr.push(arr[i - 1]);
            nextStep += Number(nthStep);
        }
    }

    console.log(newArr.join(' '));
}

printNthElement(['5', '20', '31', '4', '20', '2']);