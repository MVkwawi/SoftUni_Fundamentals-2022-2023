function rotateArr(arr) {
    let arrLength = arr.length;
    const rotationsNum = arr.splice(arrLength - 1, 1).map(Number);
    let rotation = 1;

    while (rotation <= rotationsNum) {
        let el = arr.splice(arrLength - 2, 1);
        arr.unshift(el);
        rotation ++;
    }

    console.log(arr.join(' '));
}

rotateArr(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
rotateArr(['1', '2', '3', '4', '2']);