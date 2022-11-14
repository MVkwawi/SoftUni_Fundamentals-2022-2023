function sumFirstAndLast(array) {
    let firstNum = Number(array[0]);
    let lastNum = Number(array.pop());

    const sum = (a, b) => a + b;
    console.log(sum(firstNum, lastNum));
}
sumFirstAndLast(['20', '30', '40']);