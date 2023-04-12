function spiralTheMatrix(row, col) {
  let top = 0;
  let bottom = row - 1;
  let left = 0;
  let right = col - 1;

  let matrixArr = [];
  let direction = 0; // 0 moves -> right; 1 moves - down; 2 moves <- left; 3 moves - up
//   let index = 1;

  while (top <= bottom && left <= right) {
    switch (direction % 4) {
        case 0: 
            for (let col = left; col <= right; col ++) {
                matrixArr.push([top][col]);
                // index ++;
            }
            top ++;
            direction ++;
            break;
        case 1: 
            for (let row = top; row <= bottom; row ++) {
                matrixArr.push([row][right]);
                // index ++;
            }
            right --;
            direction ++;
            break;
        case 2: 
            for (let col = right; col >= left; col --) {
                matrixArr.push([bottom][col]);
                // index ++;
            }
            bottom --;
            direction ++;
            break;
        case 3: 
            for (let row = bottom; row >= top; row --) {
                matrixArr.push([row][left]);
                //index ++;
            }
            left ++;
            direction ++;
            break;
    }
  }
  let returnResult = matrixArr.map((r) => r.join(' ')).join('\n');
  console.log(returnResult);
}
spiralTheMatrix(5, 5);
