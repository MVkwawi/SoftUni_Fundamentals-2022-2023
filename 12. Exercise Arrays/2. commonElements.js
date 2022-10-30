function commonElements(arrOne, arrTwo) {

    let arrOneLength = arrOne.length;
    let arrTwoLength = arrTwo.length;
    
    for(let arrOneIndex = 0; arrOneIndex < arrOneLength; arrOneIndex++) {
        let currentElement = arrOne[arrOneIndex];

        for(let arrTwoIndex = 0;  arrTwoIndex < arrTwoLength;  arrTwoIndex++) {
            let arrTwoCurrentElement = arrTwo[arrTwoIndex];

            if (currentElement === arrTwoCurrentElement) {
                console.log(currentElement);
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
);