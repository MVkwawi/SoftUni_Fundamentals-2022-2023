function distinctArray(arr) {
    const newArray = [];
    let arrLength = arr.length;

    for (let index = 0; index < arrLength; index ++) {
        let currentEl = arr[index];

        if (!newArray.includes(currentEl)) {
            newArray.push(arr[index]);
        }
    }
    console.log(newArray.join(' '));
}
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([1, 2, 3, 4]);