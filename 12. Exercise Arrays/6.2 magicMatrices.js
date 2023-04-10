function isMagical(arr) {
    let isMagcalMatrix = true;

    let rowSum = 0;
    let columnSum = 0;

    for (const line of arr) {
        columnSum += line[0];
        
        let currentSum = 0;
        for (const num of line) {
            currentSum += num;
        }

        if (rowSum === 0 || rowSum === currentSum) {
            rowSum = currentSum;
        } else {
            isMagcalMatrix = false;
            break;
        }
    }

    if (rowSum === columnSum) {
        console.log(isMagcalMatrix);
    } else {
        isMagcalMatrix = false;
        console.log(isMagcalMatrix);
    }
    
}
isMagical([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
isMagical([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]);
isMagical([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]);
