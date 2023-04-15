function orbit(coordinates) {
    let row = coordinates[0];
    let col = coordinates[1];
    let x = coordinates[2];
    let y = coordinates[3];
    //print the space
    let spaceMatrix = [];

    for (let r = 0; r < row; r ++) {
        spaceMatrix[r] = [];

        for (let c = 0; c < col; c ++) {
            spaceMatrix[r][c] = 0;
        }
    }
    // put the star and surround it
    let currentNum = 1;

    for (let r = 0; r < row; r ++) {

        for (let c = 0; c < col; c ++) {
            spaceMatrix[r][c] = Math.max(Math.abs(r - x), Math.abs(c - y)) + 1;
        }
    }
    //print the orbit " " + \n
    console.log(spaceMatrix.map((num) => num.join(' ')).join('\n'));
}

orbit([4, 4, 0, 0]);
orbit([5, 5, 2, 2]);
orbit([3, 3, 2, 2]);
