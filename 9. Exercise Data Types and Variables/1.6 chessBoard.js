function chessBoard(num) {
    let currentNum = 1;
    while (currentNum <= num) {
        if (currentNum === 1) {
            console.log('<div class="chessboard">');
        }

        console.log('  <div>');

        let squareNum = 1;

        if (currentNum % 2 === 0) {
            while (squareNum <= num) {

                if (squareNum % 2 === 0) {
                console.log('    <span class="black"></span>');
                } else {
                console.log('    <span class="white"></span>');
                }
                
                squareNum ++;
            }
                
        } else {
            while (squareNum <= num) {

                if (squareNum % 2 === 0) {
                console.log('    <span class="white"></span>');
                } else {
                console.log('    <span class="black"></span>');
                }
    
                squareNum ++;
            }
        }


        console.log('  </div>');

        if (currentNum === num) {
            console.log('</div>');
        }
        currentNum ++;
    }
}

chessBoard(3);