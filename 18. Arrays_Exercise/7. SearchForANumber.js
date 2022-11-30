function searchNum(arrOne, arrTwo) {
    let numsToTake = arrTwo[0];
    let numsToRemove = arrTwo[1];
    let searchNum = arrTwo[2];

    let newArr = arrOne.splice(0, numsToTake);
    newArr.splice(0, numsToRemove);

    let count = 0;

    for (const el of newArr) {
        if (el === searchNum) {
            count += 1;
        }
    }
    console.log(`Number ${searchNum} occurs ${count} times.`);
}
searchNum([5, 2, 3, 4, 1, 6],
    [5, 2, 3]);
searchNum([7, 1, 5, 8, 2, 7],
    [3, 1, 5]);