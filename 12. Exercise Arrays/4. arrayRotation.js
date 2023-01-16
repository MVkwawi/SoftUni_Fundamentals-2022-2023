function arrayRotation(arr, rotations) {

    let equalRotations = rotations % arr.length;
    
    for(let index = 0; index < equalRotations; index ++) {
        let numberToMove = arr.shift(); 
        arr.push(numberToMove);
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)