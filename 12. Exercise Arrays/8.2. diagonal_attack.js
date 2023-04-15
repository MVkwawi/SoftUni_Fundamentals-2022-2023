function diagonalAttack(matrix) {
    //parse the strings into nums
    let newArrayMatrix = [];
    let matrixLength = matrix.length;

    for (let i = 0; i < matrixLength; i ++) {
        newArrayMatrix.push(
            matrix[i].split(' ').map((str) => {
                return Number(str);
            })
        );
    }
    //check the diagonal sum
    let newArrayMatrixLength = newArrayMatrix.length;
    // let currentDiagonal = 0;
    // let currentConterDiagonal = newArrayMatrix[0].length - 1;
    let diagonalSum = 0;
    let counterDiagonalSum = 0;

    for (let i = 0; i < newArrayMatrixLength; i ++) {
        diagonalSum += newArrayMatrix[i][i];
        counterDiagonalSum += newArrayMatrix[i][newArrayMatrixLength - i - 1];
    }
    //rewrite the array with the sum = el !== sum
    let diagonalPosition = 0;
    let counterDiagonalPosition = newArrayMatrix[0].length - 1;

    if (diagonalSum === counterDiagonalSum) {
        let rowLength = newArrayMatrix[0].length;

        for (let row = 0; row < rowLength; row ++) {
            for (let currentColPosition = 0; currentColPosition < rowLength; currentColPosition ++) {
                
                if (currentColPosition !== diagonalPosition &&
                    currentColPosition !== counterDiagonalPosition) {
                        newArrayMatrix[row][currentColPosition] = diagonalSum;
                }
            }

            diagonalPosition ++;
            counterDiagonalPosition --;
        }
    } 
    //print the arr on separate lines with space      
        console.log(newArrayMatrix.map((num) => num.join(' ')).join(' \n'));
}

diagonalAttack(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']);
diagonalAttack(['1 1 1',
'1 1 1',
'1 1 0']);