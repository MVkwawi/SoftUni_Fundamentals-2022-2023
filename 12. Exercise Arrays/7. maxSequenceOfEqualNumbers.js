function maxSequenceOfEqualElements(arr) {
    let arrLength = arr.length;
    let currentArr = [];

    for (let index = 0; index < arrLength; index ++) {
        let temporaryArr = [];

        for (let j = index; j < arrLength; j ++) {
            if (arr[j] === arr[index]) {
                temporaryArr.push(arr[j]); 
            } else {
                break;
            }
        }

        if (currentArr.length < temporaryArr.length) {
            currentArr = temporaryArr; 
        }
    }

    console.log(currentArr.join(' '));
}
maxSequenceOfEqualElements([4, 4, 4, 4]);