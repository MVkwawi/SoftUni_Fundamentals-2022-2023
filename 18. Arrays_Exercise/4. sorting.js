function sorting(arr) {
    let newArr = arr.sort((a, b) => a - b);
    let resultArr = [];
    let arrLength = newArr.length / 2;

    for (let i = 0; i < arrLength; i ++) {
        let largestEl = newArr.pop();
        let smallestEl = newArr.shift();

        resultArr.push(largestEl);
        resultArr.push(smallestEl);
    }

    console.log(resultArr.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);