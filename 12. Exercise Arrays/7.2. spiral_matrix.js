function spiralMatrixVTwo(row, col) {
    let resultArray = [];

    //create the matrix
    // let matrix = [];
    // let currentLine = 1;
    // let currentNum = 1;
    // while (currentLine <= col) {
    //     let currentArr = [];
        
    //     for (let i = 1; i <= row; i ++) {
    //         currentArr.push(currentNum);
    //         currentNum ++;
    //     }
    //     matrix.push(currentArr);
    //     currentLine ++;
    // }

    for (let i = 0; i < row; i ++) {
        resultArray[i] = [];

        for (let j = 0; j < col; j ++) {
            resultArray[i][j] = 0;
        }
    }

    //create the spiral  (&& resultArray.length < matrixSize)
    let top = 0;
    let left = 0;
    let bottom = row -1;
    let right = col - 1;
    let counter = 1; //what number are we pushing in

    while (top <= bottom && left <= right) {
        //top row
        for (let i = left; i <= right; i ++) {
            resultArray[top][i] = counter;
            counter ++;
        }
        top ++;
        //right-top to bottom column
        for (let i = top; i <= bottom; i ++) {
            resultArray[i][right] = counter;
            counter ++;
        }
        right --;
        //right to left row
        for (let i = right; i >= left; i --) {
            resultArray[bottom][i] = counter;
            counter ++;
        }
        bottom --;
        //left-bottom to top column
        for (let i = bottom; i >= top; i --) {
            resultArray[i][left] = counter;
            counter ++;
        }
        left ++;
    }

    console.log(resultArray.map((a) => a.join(' ')).join('\n'));
}
spiralMatrixVTwo(4, 5);
spiralMatrixVTwo(3, 2);

