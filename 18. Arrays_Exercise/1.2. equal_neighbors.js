function findNeighborPairs(nums) {
    let pairCounter = 0;

    for (const line of nums) {
        let elNew = 0;
        let elOld = 0;
        let elUp = 0;
        
        for (const el of line) {
            if (elNew === elOld) {
                pairCounter ++;
            } 
        }

        if (elNew === elUp) {
            pairCounter ++;
        }   
    }
}
// findNeighborPairs([['2', '3', '4', '7', '0'],
// ['4', '0', '5', '3', '4'],
// ['2', '3', '5', '4', '2'],
// ['9', '8', '7', '5', '4']]
// );
findNeighborPairs([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]
);