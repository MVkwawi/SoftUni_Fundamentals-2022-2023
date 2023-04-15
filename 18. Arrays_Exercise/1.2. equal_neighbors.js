function findNeighborPairs(info) {
    let pairCounter = 0;

    for (let row = 0; row < info.length; row ++) {

        for (let col = 0; col < info[row].length; col ++) {
            let currentNum = info[row][col];

            if (currentNum === info[row][col + 1]) {
                pairCounter ++;
            }

            if (row + 1 < info.length) {
                if (currentNum === info[row + 1][col]) {
                    pairCounter ++;
                }
            }
        }
    }

    console.log(pairCounter);
}
findNeighborPairs([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
);
findNeighborPairs([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
);