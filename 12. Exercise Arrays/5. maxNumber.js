function maxNumber(arr) {
    let topInteger = [];
    let arrLength = arr.length;

    for(let i = 0; i < arrLength; i ++) {
        let isBigger = true;
        let currentNum = arr[i];

        for(let j = i + 1; j < arrLength; j ++) {
            if (currentNum <= arr[j]) {
                isBigger = false;
            }
        }

        if (isBigger) {
            topInteger.push(currentNum);
        }
    }

    console.log(topInteger.join(' '));
}
maxNumber([41, 41, 34, 20]);