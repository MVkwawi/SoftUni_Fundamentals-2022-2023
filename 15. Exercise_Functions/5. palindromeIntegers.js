function palindromeIntegers(array) {
    let arrayLength = array.length;

    for (let index = 0; index < arrayLength; index ++) {
        let currentNum = array[index].toString();
        let currentNumReversed = currentNum.split('').reverse().join(''); //'.split.reverse.join' explanation:   https://www.w3resource.com/javascript-exercises/javascript-function-exercise-1.php

        if (currentNum === currentNumReversed) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([32,2,232,1010]);