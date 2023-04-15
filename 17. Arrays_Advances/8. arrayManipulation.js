function arrayManipulation(infoArray) {
    let arrayLength = infoArray.length;
    //extract the first index and turn it into an array
    let workArray = infoArray[0].split(' ').map(Number);
     
    for (let i = 1; i < arrayLength; i ++) {
        let currentArrayIndex = infoArray[i].split(' ');
        let command = currentArrayIndex[0];
        
        for (let j = 0; j < currentArrayIndex.length - 1; j ++) {
            let currentNum = Number(currentArrayIndex[j + 1]);

            switch (command) {
                case 'Add': workArray.push(currentNum); break;
                case 'Remove': let removeNumArray = workArray.filter((el) => el !== currentNum);
                               workArray = removeNumArray;
                               break;
                case 'RemoveAt': workArray.splice(currentNum, 1); break;
                case 'Insert': workArray.splice(currentArrayIndex[2], 0, currentNum); break;
            }
            
            if (command === 'Insert') {
                break;
            } 
        }
    }
    console.log(workArray.join(' '));
}
arrayManipulation(['4 19 2 53 6 43', 
                   'Add 3', 
                   'Remove 2', 
                   'RemoveAt 1', 
                   'Insert 8 3']);
                   
arrayManipulation(['6 12 2 65 6 42',
                   'Add 8',
                   'Remove 12',
                   'RemoveAt 3',
                   'Insert 6 2']);