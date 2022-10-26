function reverseNumbers(number, array) {
    let reverseArray = [];

    for (let i = 0; i <= number - 1; i ++) {
        reverseArray[i] = array[number - 1 - i];
    }

    let result = '';
    for(let j = 0; j < reverseArray.length; j ++) {
        result += reverseArray[j];

        if(j < reverseArray.length - 1) {
            result += ' ';
        }
    }
    console.log(result);
}
reverseNumbers(3, [10, 20, 30, 40, 50]);

function reverseArrayTwo(number, array) {
    let reverseArray = [];

    for(let i = number - 1; i >= 0; i --) {
        reverseArray.push(array[i]);
    }

    console.log(reverseArray.join(' '));
}
reverseArrayTwo(4, [-1, 20, 99, 5]);

function reverseArrayThree(num, array) {
    let numArray = [];

    for (let i = 0; i <= num - 1; i ++) {
        numArray[i] = array[i];
    }

    let output = numArray.reverse();

    console.log(output.join(' '));
}
reverseArrayThree(2, [66, 43, 75, 89, 47]);