function isMagical(arr) {
    let isMagicalLine = true;
    let isMagicalRow = true;
    let isMagicalArr = true;

    for (const line of arr) {
        let lineSum = 0;
        // let rowSum = 0;
 
        for (const num of line) {
            lineSum += num;  
              
        } 
        console.log(lineSum);
    }

    // if (isMagicalLine && isMagicalRoll) {
    //     console.log(isMagicalArr);
    // }
}
isMagical([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
// isMagical([
//   [11, 32, 45],
//   [21, 0, 1],
//   [21, 1, 1],
// ]);
// isMagical([
//   [1, 0, 0],
//   [0, 0, 1],
//   [0, 1, 0],
// ]);
