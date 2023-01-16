function nonDecreasingSubset (arr) {
    const arrLength = arr.length;
    let currentBiggestNum = 0;

    for (let i = 0; i < arrLength; i ++) {
        if (currentBiggestNum >= arr[i]) {
            arr.splice(i, 1);
            i --;
        } else {
            currentBiggestNum = arr[i];
        }
    }

    console.log(arr.join(' '));
}

nonDecreasingSubset([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([ 1, 2, 3, 4]);
nonDecreasingSubset([ 20, 3, 2, 15, 6, 1]);
