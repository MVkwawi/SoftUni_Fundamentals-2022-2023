function mergeArrays(arrOne, arrTwo) {
    let arrThree = [];
    let arrOneLength = arrOne.length;

    for(let index = 0; index < arrOneLength; index ++){

        if (index % 2 === 0) {
            arrThree[index] = Number(arrOne[index]) + Number(arrTwo[index]);
        } else {
            arrThree[index] = arrOne[index] + arrTwo[index];
        }
    }

    console.log(arrThree.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)