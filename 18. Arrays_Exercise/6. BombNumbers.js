function detonateNumsInArr(arrOne, arrTwo) {
    let bomb = arrTwo[0]; 
    let detonator = arrTwo[1];
    let arrOneLength = arrOne.length;

    for (let index = 0; index < arrOneLength; index ++) {
        let currentNum = arrOne[index];
        
        if (currentNum === bomb) {
            let indexToRemove = arrOne.indexOf(currentNum);
            arrOne.splice(indexToRemove, detonator + 1);
            arrOne.splice(indexToRemove - detonator, detonator );
        }
    }
    let sum = 0;

    for (const el of arrOne) {
        sum += el;
    }
    console.log(sum);
}
detonateNumsInArr([1, 2, 2, 4, 2, 2, 2, 9], [4, 2] );
detonateNumsInArr([1, 4, 4, 2, 8, 9, 1], [9, 3]);
detonateNumsInArr([1, 7, 7, 1, 2, 3], [7, 1]);
detonateNumsInArr([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);