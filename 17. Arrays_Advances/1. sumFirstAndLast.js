function sumFirstAndLast(array) {
    let firstNum = Number(array.shift());
    let lastNum = Number(array.pop());

    const sum = (a, b) => a + b;
    console.log(sum(firstNum, lastNum));
}
sumFirstAndLast(['20', '30', '40']);